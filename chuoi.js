// ============================================================
// Locket Friend Streak Engine (Tính chuỗi 2 chiều theo giờ VN)
// Hỗ trợ: Shadowrocket / Loon / Quantumult X / Surge
// Tính năng:
// - Đủ 2 chiều trong ngày (0h-24h VN) -> +1 chuỗi lửa
// - Từ 2 ngày hiện 🔥 + số ngày cạnh tên bạn bè (VD: Minh 🔥12)
// - Sau 20h chưa giữ chuỗi hiện ⏳ nhắc nhở
// - Đổi màu biểu tượng lửa theo mốc: 1, 3, 7, 30, 100, 365 ngày
// - Lưu chuỗi đứt 7 ngày để khôi phục ngay khi cần
// ============================================================

const STORE_KEY = "LOCKET_FRIEND_STREAKS_V1";

// 👇 NẾU LỠ MẤT CHUỖI, ĐIỀN USERNAME BẠN BÈ VÀO ĐÂY ĐỂ KHÔI PHỤC NGAY (TRONG 7 NGÀY) 👇
// Ví dụ: ["minh_nguyen", "lan_anh02"]
const RESTORE_USERNAMES = [];

function getVNTimeInfo() {
    const now = new Date();
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const vnDate = new Date(utcMs + (7 * 3600000));
    
    const year = vnDate.getFullYear();
    const month = String(vnDate.getMonth() + 1).padStart(2, "0");
    const day = String(vnDate.getDate()).padStart(2, "0");
    const todayStr = `${year}-${month}-${day}`;
    
    const yesterdayDate = new Date(vnDate.getTime() - 86400000);
    const yYear = yesterdayDate.getFullYear();
    const yMonth = String(yesterdayDate.getMonth() + 1).padStart(2, "0");
    const yDay = String(yesterdayDate.getDate()).padStart(2, "0");
    const yesterdayStr = `${yYear}-${yMonth}-${yDay}`;

    return {
        todayStr: todayStr,
        yesterdayStr: yesterdayStr,
        hour: vnDate.getHours(),
        timestamp: vnDate.getTime()
    };
}

function getFlameBadgeByDays(days) {
    if (days >= 365) return "👑🔥"; // Lửa vàng (365 ngày)
    if (days >= 100) return "💙🔥"; // Lửa xanh (100 ngày)
    if (days >= 30)  return "💜🔥"; // Lửa tím (30 ngày)
    if (days >= 7)   return "❤️‍🔥"; // Rực cháy (7 ngày)
    if (days >= 3)   return "🔥";   // Bén lửa (3 ngày)
    return "🔥";                    // Mồi lửa (2 ngày)
}

function loadStreakDB() {
    try {
        if (typeof $persistentStore !== "undefined") {
            const raw = $persistentStore.read(STORE_KEY);
            return raw ? JSON.parse(raw) : {};
        }
    } catch (e) {}
    return {};
}

function saveStreakDB(db) {
    try {
        if (typeof $persistentStore !== "undefined") {
            $persistentStore.write(JSON.stringify(db), STORE_KEY);
        }
    } catch (e) {}
}

let url = (typeof $request !== "undefined" && $request.url) ? $request.url : "";
let body = (typeof $response !== "undefined" && $response.body) ? $response.body : "";

if (!body) {
    $done({});
}

try {
    let data = JSON.parse(body);
    let db = loadStreakDB();
    let vn = getVNTimeInfo();
    let isModified = false;

    // 1. GHI NHẬN TƯƠNG TÁC 2 CHIỀU (XEM ẢNH / THẢ CẢM XÚC / NHẮN TIN)
    if (url.includes("moment") || url.includes("reaction") || url.includes("message") || url.includes("view")) {
        let targetUid = null;
        let direction = null;

        if (typeof $request !== "undefined" && $request.body) {
            try {
                let reqObj = JSON.parse($request.body);
                if (reqObj.recipient_uid || reqObj.friend_uid || reqObj.user_uid) {
                    targetUid = reqObj.recipient_uid || reqObj.friend_uid || reqObj.user_uid;
                    direction = "outgoing";
                }
            } catch (e) {}
        }

        if (data && data.result && Array.isArray(data.result.views)) {
            data.result.views.forEach(v => {
                let fUid = v.uid || v.user_uid;
                if (fUid) {
                    updateInteraction(db, fUid, "incoming", vn);
                }
            });
        }

        if (targetUid && direction) {
            updateInteraction(db, targetUid, direction, vn);
        }
        saveStreakDB(db);
    }

    // 2. HIỂN THỊ SỐ CHUỖI 🔥 HOẶC NHẮC NHỞ ⏳ CẠNH TÊN BẠN BÈ
    function decorateFriendObject(friend) {
        if (!friend || typeof friend !== "object") return;
        let uid = friend.uid || friend.id || friend.user_uid;
        let username = (friend.username || "").toLowerCase();
        if (!uid) return;

        if (!db[uid]) {
            db[uid] = {
                count: 0,
                lastCompletedDate: "",
                todayOutgoing: false,
                todayIncoming: false,
                activeDate: vn.todayStr,
                backupCount: 0,
                brokenAt: 0
            };
        }

        let record = db[uid];

        if (record.activeDate !== vn.todayStr) {
            if (record.lastCompletedDate !== vn.yesterdayStr && record.lastCompletedDate !== vn.todayStr && record.count > 0) {
                record.backupCount = record.count;
                record.brokenAt = vn.timestamp;
                record.count = 0;
            }
            record.todayOutgoing = false;
            record.todayIncoming = false;
            record.activeDate = vn.todayStr;
        }

        // Khôi phục chuỗi đứt trong vòng 7 ngày (604800000 ms)
        if (RESTORE_USERNAMES.length > 0 && username && RESTORE_USERNAMES.map(u => u.toLowerCase()).includes(username)) {
            if (record.backupCount > 0 && (vn.timestamp - record.brokenAt) <= 604800000) {
                record.count = record.backupCount;
                record.lastCompletedDate = vn.todayStr;
                record.backupCount = 0;
                record.brokenAt = 0;
            }
        }

        let displayName = friend.first_name || friend.display_name || friend.name;
        if (displayName && typeof displayName === "string") {
            displayName = displayName.replace(/\s*(👑🔥|💙🔥|💜🔥|❤️‍🔥|🔥)\d+/g, "").replace(/\s*⏳/g, "");

            if (record.count >= 2) {
                let badge = getFlameBadgeByDays(record.count);
                displayName = `${displayName} ${badge}${record.count}`;
            }

            if (vn.hour >= 20 && record.lastCompletedDate !== vn.todayStr && (record.count >= 1 || record.todayOutgoing || record.todayIncoming)) {
                displayName = `${displayName} ⏳`;
            }

            if (friend.first_name) friend.first_name = displayName;
            if (friend.display_name) friend.display_name = displayName;
            if (friend.name) friend.name = displayName;
            isModified = true;
        }
    }

    if (Array.isArray(data)) {
        data.forEach(decorateFriendObject);
    } else if (data && typeof data === "object") {
        if (Array.isArray(data.friends)) data.friends.forEach(decorateFriendObject);
        if (data.result && Array.isArray(data.result.friends)) data.result.friends.forEach(decorateFriendObject);
        if (data.result && Array.isArray(data.result.users)) data.result.users.forEach(decorateFriendObject);
    }

    if (isModified) {
        saveStreakDB(db);
        body = JSON.stringify(data);
    }
} catch (err) {}

function updateInteraction(db, uid, direction, vn) {
    if (!db[uid]) {
        db[uid] = {
            count: 0,
            lastCompletedDate: "",
            todayOutgoing: false,
            todayIncoming: false,
            activeDate: vn.todayStr,
            backupCount: 0,
            brokenAt: 0
        };
    }
    let rec = db[uid];
    if (rec.activeDate !== vn.todayStr) {
        rec.todayOutgoing = false;
        rec.todayIncoming = false;
        rec.activeDate = vn.todayStr;
    }

    if (direction === "outgoing") rec.todayOutgoing = true;
    if (direction === "incoming") rec.todayIncoming = true;

    if (rec.todayOutgoing && rec.todayIncoming && rec.lastCompletedDate !== vn.todayStr) {
        if (rec.lastCompletedDate === vn.yesterdayStr || rec.count === 0) {
            rec.count += 1;
        } else {
            rec.count = 1;
        }
        rec.lastCompletedDate = vn.todayStr;
    }
}

$done({ body: body });
