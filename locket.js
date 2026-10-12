var request = $request;

const options = {
    url: "https://api.revenuecat.com/v1/product_entitlement_mapping",
    headers: {
     'Authorization' : request.headers["authorization"],
     'X-Platform' : 'iOS' ,
     'User-Agent' : request.headers["user-agent"]
    }
}

$httpClient.get(options, function(error, newResponse, data){
    // Bắt lỗi nếu data trả về không phải JSON hợp lệ
    if (error) {
        $done({});
        return;
    }
    
    try {
        const ent = JSON.parse(data);

        let jsonToUpdate = {
            "request_date_ms": 1704070861000,
            "request_date": "9999-09-9T01:01:01Z",
            "subscriber": {
                "entitlement": {},
                "first_seen": "9999-09-9T01:01:01Z",
                "original_application_version": "9692",
                "last_seen": "9999-09-9T01:01:01Z",
                "other_purchases": {},
                "management_url": null,
                "subscriptions": {},
                "entitlements": {},
                "original_purchase_date": "9999-09-9T01:01:01Z",
                "original_app_user_id": "70B24288-83C4-4035-B001-573285B21AE2",
                "non_subscriptions": {}
            }
        };

        const productEntitlementMapping = ent.product_entitlement_mapping;

        for (const [entitlementId, productInfo] of Object.entries(productEntitlementMapping)) {
            const productIdentifier = productInfo.product_identifier;
            const entitlements = productInfo.entitlements;

            for (const entitlement of entitlements) {
                jsonToUpdate.subscriber.entitlements[entitlement] = {
                    "purchase_date": "9999-09-9T01:01:01Z",
                    "original_purchase_date": "9999-09-9T01:01:01Z",
                    "expires_date": "9692-01-01T01:01:01Z",
                    "is_sandbox" : false,
                    "ownership_type": "PURCHASED",
                    "store": "app_store",
                    "product_identifier": productIdentifier
                };

                // Add product identifier to subscriptions
                jsonToUpdate.subscriber.subscriptions[productIdentifier] = {
                    "expires_date": "9692-01-01T01:01:01Z",
                    "original_purchase_date": "9999-09-9T01:01:01Z",
                    "purchase_date": "9999-09-9T01:01:01Z",
                    "is_sandbox" : false,
                    "ownership_type": "PURCHASED",
                    "store": "app_store"
                };
            }
        }

        let body = JSON.stringify(jsonToUpdate);
        
        // Delay 15 giây (15000ms) rồi mới báo âm thanh và trả kết quả
        setTimeout(() => {
            $notification.post(
                "RevenueCat API 💛", 
                "Chặn dữ liệu thành công!", 
                "Anh yêu ơi, đã lên Gold được 15 giây rồi nè~", 
                {"sound": "default"}
            );
$done({body});
        }, 15000);

    } catch (e) {
        console.log("Bé yêu báo lỗi Parse JSON: " + e);
        $done({});
    }
});
