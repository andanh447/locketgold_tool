// language: JavaScript, file: locket_master.js, runtime: Shadowrocket Script Engine
// *Can thiệp đồng thời vào phản hồi của RevenueCat và Firebase Remote Config*

const url = $request.url;
let body = $response.body;

if (!body) {
    $done({});
}

try {
    let obj = JSON.parse(body);

    // Nhánh 1: Xử lý mở khóa Locket Gold (RevenueCat)
    if (url.includes("api.revenuecat.com")) {
        const entitlement_id = "Gold";
        const product_id = "locket_gold_yearly";
        
        if (!obj.subscriber) obj.subscriber = {};
        if (!obj.subscriber.entitlements) obj.subscriber.entitlements = {};
        if (!obj.subscriber.subscriptions) obj.subscriber.subscriptions = {};

        const expire_date = "2099-12-31T23:59:59Z";
        const purchase_date = "2024-01-01T00:00:00Z";

        obj.subscriber.entitlements[entitlement_id] = {
            "expires_date": expire_date,
            "product_identifier": product_id,
            "purchase_date": purchase_date
        };

        obj.subscriber.subscriptions[product_id] = {
            "billing_issues_detected_at": null,
            "expires_date": expire_date,
            "is_sandbox": false,
            "original_purchase_date": purchase_date,
            "period_type": "normal",
            "purchase_date": purchase_date,
            "store": "app_store",
            "unsubscribe_detected_at": null
        };

        body = JSON.stringify(obj);
    }

    // Nhánh 2: Ghi đè cờ giới hạn tính năng (Firebase Remote Config)
    if (url.includes("firebaseremoteconfig.googleapis.com")) {
        if (obj.entries) {
            // Ghi đè thời lượng quay video tối đa (30 giây) và bật âm thanh
            obj.entries["max_video_duration"] = "30";
            obj.entries["video_max_length_seconds"] = "30";
            obj.entries["enable_video_audio"] = "true";
            obj.entries["allow_private_posts"] = "true";
            obj.entries["gold_features_enabled"] = "true";
        }
        body = JSON.stringify(obj);
    }

    $done({ body });
} catch (e) {
    // Nếu JSON không hợp lệ, trả về nguyên bản để không làm văng app
    $done({});
}
