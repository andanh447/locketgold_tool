let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        
        // Khởi tạo các object nếu chưa có
        obj.subscriber = obj.subscriber || {};
        obj.subscriber.entitlements = obj.subscriber.entitlements || {};
        obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};

        // Bơm quyền lợi "Gold" của Locket vào payload
        obj.subscriber.entitlements["Gold"] = {
            "expires_date": "9999-09-09T23:59:59Z",
            "product_identifier": "locket_gold_yearly",
            "purchase_date": "9999-09-09T00:00:00Z"
        };
        
        // Kích hoạt gói đăng ký tương ứng
        obj.subscriber.subscriptions["locket_gold_yearly"] = {
            "billing_issues_detected_at": null,
            "expires_date": "9999-09-09T23:59:59Z",
            "is_sandbox": false,
            "original_purchase_date": "9999-09-09T00:00:00Z",
            "period_type": "normal",
            "purchase_date": "9999-09-09T00:00:00Z",
            "store": "app_store",
            "unsubscribe_detected_at": null
        };

        $done({body: JSON.stringify(obj)});
    } catch (e) {
        $done({});
    }
} else {
    $done({});
}
