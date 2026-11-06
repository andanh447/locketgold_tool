/***********************************************
> Locket AI Filter Modifier - Shadowrocket Optimized
> Tác giả: andanh447
> Chức năng: Unblur, Gold VIP, Unlock Filters & Stickers
***********************************************/

const WORKER_HOST = "https://locket-vip.mhiep20077.workers.dev";
const VIP_STORE_KEY = "LOCKET_VIP_COMMUNITY";
const SELF_UID_KEY = "LOCKET_SELF_UID";
const SELF_USERNAME_KEY = "LOCKET_SELF_USERNAME";

const BASE_VIP_USERS = ["minhhiep08","minhhiep07","mhiep20077","ltocamz","miinhhiep","mhhiep","hippobbie","dinhvy0801","tranqvinh","long_pham0","buichienthang11","chouuanhhhh","hiu.shin","trajiangie","tudaden","tkhoii009","thanh_rh","grey_10","thunf","atuann207","anhnhung0207","dat0097","nhulocc","nhung.39","luongcamnhung","tuum1509","thanghongngu","talaban007","khoeboi","nam1307","quanhung1810","thanhkkk09","vtuyenzz","cao_quang_hieu","kenn.nah","sonthai47","botuoingaidam","hieutrr","longsiu7","hngnhng.ou","haiha_2011","wka.iuem","oanh_oanh03","myznahh","vietdo689","vdat100","anhhuy0501","sonkemppe003","hieuha22","pvv0","thanhson1401","mhhuyz","nln9pozfecsccxhuqpiwvkhfwsi2","th_quang08","2c7dlquxuqulknrwgpcqsqlw0sk2","th_quang","lsfane37a0nntnvkjgonwypc22o2","kienviet","hieon0","nguyendinhtuan00"];

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

// --- REQUEST ---
if (typeof $response === "undefined") {
    let headers = Object.assign({}, $request.headers || {});
    for (let k of Object.keys(headers)) {
        if (['if-none-match', 'if-modified-since', 'x-revenuecat-etag'].includes(k.toLowerCase())) {
            delete headers[k];
        }
    }
    headers["X-App-Region"] = "US";
    headers["X-Country-Code"] = "US";
    headers["X-Device-Country"] = "US";
    headers["X-Timezone"] = "America/Los_Angeles";
    $done({ headers: headers, body: $request.body });
} else {
    // --- RESPONSE ---
    let body = $response.body;
    let status = $response.status || $response.statusCode || 200;
    const customArg = (typeof $argument === "string" && $argument.trim()) ? $argument.trim().toLowerCase() : "";
    const unlockAllFriends = customArg.includes("all_friends=true") || customArg.includes("gold_all=true");

    let vipSet = new Set(BASE_VIP_USERS.map(u => String(u).toLowerCase().trim()));

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

            if (status === 402 || status === 403 || status === 400 || (obj && obj.error)) {
                status = 200;
                let dataToKeep = {};
                if (obj && obj.error && obj.error.details) dataToKeep = obj.error.details;
                else if (obj && obj.data) dataToKeep = obj.data;
                
                obj = {
                    data: dataToKeep,
                    status: 200,
                    success: true,
                    is_gold: true,
                    is_locked: false,
                    requires_gold: false,
                    unlocked: true,
                    can_use_filters: true,
                    can_use_stickers: true
                };
            }

            function transformNode(node) {
                if (!node || typeof node !== "object") return;
                if (Array.isArray(node)) {
                    for (let i = 0; i < node.length; i++) transformNode(node[i]);
                    return;
                }

                const isSelf = ("email" in node || "phone_number" in node || "push_token" in node || "fcm_token" in node || "can_use_filters" in node || "can_use_gold_features" in node || node.is_current_user === true);

                if (isSelf) {
                    applyGoldBadge(node);
                    node.can_use_filters = true;
                    node.can_use_gold_features = true;
                    node.can_generate_filtered_image = true;
                    node.can_create_filtered_image = true;
                    node.can_use_stickers = true;
                    node.has_ai_access = true;
                    node.filter_access = true;
                    node.sticker_access = true;
                    node.unlimited_stickers = true;
                    node.is_premium = true;

                    const uid = String(node.uid || node.user_id || node.id || "").toLowerCase().trim();
                    const username = String(node.username || "").toLowerCase().trim();

                    if (typeof $persistentStore !== "undefined") {
                        if (uid) $persistentStore.write(uid, SELF_UID_KEY);
                        if (username) $persistentStore.write(username, SELF_USERNAME_KEY);
                    }
                    if (uid) vipSet.add(uid);
                    if (username) vipSet.add(username);
                } else {
                    const isVipFriend = unlockAllFriends || isNodeVip(node, vipSet);
                    if (isVipFriend) {
                        applyGoldBadge(node);
                        if (node.user && typeof node.user === "object") applyGoldBadge(node.user);
                        if (node.friend && typeof node.friend === "object") applyGoldBadge(node.friend);
                    }
                }

                if (node.filters && Array.isArray(node.filters)) {
                    node.filters.forEach(f => { f.is_locked = false; f.requires_gold = false; f.unlocked = true; });
                }
                if (node.stickers && Array.isArray(node.stickers)) {
                    node.stickers.forEach(s => { s.is_locked = false; s.requires_gold = false; s.unlocked = true; });
                }

                const falseFlags = ["is_locked", "locked", "requires_gold", "require_gold", "gold_only", "is_gold_only", "paywall", "show_paywall", "show_upsell", "upsell", "blurred", "is_blurred", "needs_gold", "is_premium_only", "premium_only"];
                for (let f of falseFlags) if (f in node) node[f] = false;

                const trueFlags = ["can_view", "unlocked", "is_unlocked", "is_free", "free", "can_use_filter", "allowed", "can_use_filters", "can_use_stickers", "sticker_access", "is_available", "enabled"];
                for (let t of trueFlags) if (t in node) node[t] = true;

                if ("item_type" in node || "sticker_id" in node || "filter_id" in node || "id" in node) {
                    node.is_locked = false; node.requires_gold = false; node.unlocked = true; node.is_free = true; node.can_use = true;
                }

                const clearUrl = node.unblurred_url || node.unlocked_url || node.result_url || node.image_url || node.transformed_image_url || node.url || node.original_url;
                if (clearUrl && typeof clearUrl === "string" && clearUrl.startsWith("http")) {
                    if ("blurred_url" in node) node.blurred_url = clearUrl;
                    if ("blurred_image_url" in node) node.blurred_image_url = clearUrl;
                    if ("preview_url" in node && node.is_blurred) node.preview_url = clearUrl;
                }

                for (let k of Object.keys(node)) {
                    if (k !== "badge" && k !== "is_gold" && k !== "has_gold" && k !== "tier" && k !== "gold") {
                        if (vipSet.has(k.toLowerCase().trim()) && node[k] && typeof node[k] === "object") applyGoldBadge(node[k]);
                        transformNode(node[k]);
                    }
                }
            }

            transformNode(obj);
