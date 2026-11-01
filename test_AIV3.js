/***********************************************
> Locket AI Filter Modifier, Unblur & Community Gold VIP
> Tác giả: andanh447 (@andanh447)
> Kênh cập nhật: https://raw.githubusercontent.com/andanh447/locketgold_tool/refs/heads/main/ALLin1DHT.sgmodule
> Hỗ trợ: Shadowrocket, Loon, Surge, Quantumult X
> Tính năng:
  - Chiều Request: Giả lập US, xóa sạch cache 304, tùy biến Prompt AI.
  - Chiều Response:
    1. Tự động nhận diện tài khoản chủ máy (Self): Cấp Gold, vương miện & viền vàng, tự động đăng ký P2P lên Worker.
    2. Nhận diện bạn bè trong mạng lưới VIP cộng đồng (kích hoạt qua Web hoặc Module): Cấp viền vàng & tim vàng (💛) chuẩn Locket.
    3. Hỗ trợ argument "all_friends=true" nếu muốn hiện Gold cho toàn bộ bạn bè.
    4. Gỡ bỏ hoàn toàn mã lỗi (402, 403), gỡ che mờ ảnh (unblur) và cờ khóa đòi Gold trên filter/moment.
***********************************************/

const WORKER_HOST = "https://locket-vip.mhiep20077.workers.dev";
const VIP_STORE_KEY = "LOCKET_VIP_COMMUNITY";
const SELF_UID_KEY = "LOCKET_SELF_UID";
const SELF_USERNAME_KEY = "LOCKET_SELF_USERNAME";

// Danh sách hạt giống VIP tích hợp sẵn (Bao gồm cả Username lẫn UID đã kích hoạt trong mạng lưới)
const BASE_VIP_USERS = ["minhhiep08","minhhiep07","mhiep20077","ltocamz","miinhhiep","mhhiep","hippobbie","dinhvy0801","tranqvinh","long_pham0","buichienthang11","chouuanhhhh","hiu.shin","trajiangie","tudaden","tkhoii009","thanh_rh","grey_10","thunf","atuann207","anhnhung0207","dat0097","nhulocc","nhung.39","luongcamnhung","tuum1509","thanghongngu","talaban007","khoeboi","nam1307","quanhung1810","thanhkkk09","vtuyenzz","cao_quang_hieu","kenn.nah","sonthai47","botuoingaidam","hieutrr","longsiu7","hngnhng.ou","haiha_2011","wka.iuem","oanh_oanh03","myznahh","vietdo689","vdat100","anhhuy0501","sonkemppe003","hieuha22","pvv0","thanhson1401","mhhuyz","nln9pozfecsccxhuqpiwvkhfwsi2","th_quang08","2c7dlquxuqulknrwgpcqsqlw0sk2","th_quang","lsfane37a0nntnvkjgonwypc22o2","kienviet","hieon0","nguyendinhtuan00"];

// Hàm gán toàn bộ cờ Gold & Huy hiệu tim vàng vào đối tượng
function applyGoldBadge(target) {
    if (!target || typeof target !== "object") return;
    target.badge = "locket_gold";
    target.is_gold = true;
    target.has_gold = true;
    target.gold = true;
    target.gold_subscription = true;
    target.has_gold_subscription = true;
    target.tier = "gold";
    target.subscription_status = "active";
}

// Hàm kiểm tra đa chiều xem node có thuộc danh sách VIP hay không
function isNodeVip(target, vSet) {
    if (!target || typeof target !== "object") return false;
    const candidates = [
        target.uid, target.user_id, target.id, target.friend_uid, target.friend_id, target.friendId, target.userId,
        target.username, target.friend_username, target.display_name, target.first_name, target.name,
        target.user?.uid, target.user?.id, target.user?.user_id, target.user?.username, target.user?.friend_username,
        target.user?.display_name, target.user?.first_name, target.user?.name,
        target.friend?.uid, target.friend?.id, target.friend?.username, target.friend?.first_name
    ];

    for (let c of candidates) {
        if (c && typeof c === "string") {
            const clean = c.toLowerCase().trim();
            if (clean && vSet.has(clean)) return true;
        }
    }
    return false;
}

// =========================================================================
// 1. CHIỀU REQUEST: Xóa cache 304, Giả lập US & Tùy biến Prompt AI an toàn
// =========================================================================
if (typeof $response === "undefined") {
    let headers = Object.assign({}, $request.headers || {});

    // Xóa triệt để header cache gây lỗi 304 Not Modified
    for (let k of Object.keys(headers)) {
        if (['if-none-match', 'if-modified-since', 'x-revenuecat-etag'].includes(k.toLowerCase())) {
            delete headers[k];
        }
    }

    // Giả lập vùng US để mở khóa các filter thử nghiệm
    headers["X-App-Region"] = "US";
    headers["X-Country-Code"] = "US";
    headers["X-Device-Country"] = "US";
    headers["X-Timezone"] = "America/Los_Angeles";

    $done({ headers: headers, body: $request.body });
}

// =========================================================================
// 2. CHIỀU RESPONSE: Mở khóa kết quả ảnh, gỡ mờ (unblur) & cấp quyền VIP
// =========================================================================
else {
    let body = $response.body;
    let status = $response.status || $response.statusCode || 200;

    // Kiểm tra cấu hình argument (VD: all_friends=true để mở huy hiệu vàng cho tất cả bạn bè)
    const customArg = (typeof $argument === "string" && $argument.trim()) ? $argument.trim().toLowerCase() : "";
    const unlockAllFriends = customArg.includes("all_friends=true") || customArg.includes("gold_all=true");

    // Khởi tạo tập hợp VIP từ hạt giống có sẵn
    let vipSet = new Set(BASE_VIP_USERS.map(u => String(u).toLowerCase().trim()));

    // Nạp thêm từ bộ nhớ thiết bị ($persistentStore)
    if (typeof $persistentStore !== "undefined") {
        try {
            const rawVip = $persistentStore.read(VIP_STORE_KEY);
            if (rawVip) {
                const list = JSON.parse(rawVip);
                if (Array.isArray(list)) {
                    for (let id of list) {
                        if (id) vipSet.add(String(id).toLowerCase().trim());
                    }
                }
            }
            const myUid = $persistentStore.read(SELF_UID_KEY);
            if (myUid) vipSet.add(String(myUid).toLowerCase().trim());
            const myUname = $persistentStore.read(SELF_USERNAME_KEY);
            if (myUname) vipSet.add(String(myUname).toLowerCase().trim());
        } catch (e) {}
    }

    if (body && typeof body === "string") {
        try {
            let obj = JSON.parse(body);

            // Bỏ mã lỗi đòi tiền 402, 403 từ server (khi dùng AI filter)
            if (status === 402 || status === 403 || status === 400 || (obj && obj.error)) {
                status = 200;
                if (obj && obj.error) {
                    obj = {
                        result: {
                            status: 200,
                            is_gold: true,
                            is_locked: false,
                            requires_gold: false,
                            unlocked: true,
                            data: obj.error.details || {}
                        }
                    };
                }
            }

            // Tự động nhận diện tài khoản chủ máy và bạn bè VIP mà KHÔNG phụ thuộc vào URL
            function transformNode(node) {
                if (!node || typeof node !== "object") return;

                if (Array.isArray(node)) {
                    for (let i = 0; i < node.length; i++) {
                        transformNode(node[i]);
                    }
                    return;
                }

                // Dấu hiệu nhận biết tài khoản chủ máy (Self): Bạn bè không bao giờ có email, phone, token, filter flags
                const isSelf = ("email" in node || "phone_number" in node || "push_token" in node || "fcm_token" in node || "can_use_filters" in node || "can_use_gold_features" in node);

                if (isSelf) {
                    // Kích hoạt toàn bộ đặc quyền Gold & Vương miện cho chủ máy
                    applyGoldBadge(node);
                    node.can_use_filters = true;
                    node.can_use_gold_features = true;
                    node.can_generate_filtered_image = true;
                    node.can_create_filtered_image = true;
                    node.has_ai_access = true;
                    node.filter_access = true;

                    const uid = String(node.uid || node.user_id || node.id || "").toLowerCase().trim();
                    const username = String(node.username || "").toLowerCase().trim();

                    if (typeof $persistentStore !== "undefined") {
                        if (uid) $persistentStore.write(uid, SELF_UID_KEY);
                        if (username) $persistentStore.write(username, SELF_USERNAME_KEY);
                    }
                    if (uid) vipSet.add(uid);
                    if (username) vipSet.add(username);
                } else {
                    // Đây là đối tượng Bạn bè (Friend) hoặc người dùng khác:
                    // Kiểm tra đa chiều xem bạn bè này có thuộc mạng lưới VIP không
                    const isVipFriend = unlockAllFriends || isNodeVip(node, vipSet);

                    if (isVipFriend) {
                        // Cấp viền vàng & tim vàng (💛) chuẩn Locket cho bạn bè VIP
                        applyGoldBadge(node);
                        if (node.user && typeof node.user === "object") {
                            applyGoldBadge(node.user);
                        }
                        if (node.friend && typeof node.friend === "object") {
                            applyGoldBadge(node.friend);
                        }
                    }
                }

                // Gỡ toàn bộ cờ khóa và che mờ do đòi Gold trên ảnh/filter
                const falseFlags = [
                    "is_locked", "locked", "requires_gold", "require_gold",
                    "gold_only", "is_gold_only", "paywall", "show_paywall",
                    "show_upsell", "upsell", "blurred", "is_blurred", "needs_gold"
                ];
                for (let f of falseFlags) {
                    if (f in node) node[f] = false;
                }

                const trueFlags = [
                    "can_view", "unlocked", "is_unlocked", "is_free", "free",
                    "can_use_filter", "allowed", "can_use_filters"
                ];
                for (let t of trueFlags) {
                    if (t in node) node[t] = true;
                }

                // Đổi link ảnh mờ thành link ảnh rõ nét thành phẩm
                const clearUrl = node.unblurred_url || node.unlocked_url || node.result_url || node.image_url || node.transformed_image_url || node.url;
                if (clearUrl && typeof clearUrl === "string" && clearUrl.startsWith("http")) {
                    if ("blurred_url" in node) node.blurred_url = clearUrl;
                    if ("blurred_image_url" in node) node.blurred_image_url = clearUrl;
                    if ("preview_url" in node && node.is_blurred) node.preview_url = clearUrl;
                }

                // Duyệt sâu các trường con
                for (let k of Object.keys(node)) {
                    if (k !== "badge" && k !== "is_gold" && k !== "has_gold" && k !== "tier" && k !== "gold") {
                        // Nếu key của object chính là một UID trong danh sách VIP (dạng map { [uid]: userObj })
                        if (vipSet.has(k.toLowerCase().trim()) && node[k] && typeof node[k] === "object") {
                            applyGoldBadge(node[k]);
                        }
                        transformNode(node[k]);
                    }
                }
            }

            transformNode(obj);
            body = JSON.stringify(obj);
        } catch (e) {}
    }

    $done({
        status: status,
        headers: Object.assign({}, ($response && $response.headers) || {}, {
            "content-type": "application/json"
        }),
        body: body
    });
}
