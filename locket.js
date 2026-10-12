let body = $response.body;

if (body) {
try {
let obj = JSON.parse(body);

let jsonToUpdate = {
"request_date_ms": new Date().getTime(), // Cập nhật realtime tránh lỗi rụng app
"request_date": "2099-12-31T23:59:59Z",
"subscriber": {
"entitlement": {},
"first_seen": "2023-01-01T01:01:01Z",
"original_application_version": "9999",
"last_seen": "2099-12-31T23:59:59Z",
"other_purchases": {},
"management_url": null,
"subscriptions": {},
"entitlements": {},
"original_purchase_date": "2023-01-01T01:01:01Z",
"original_app_user_id": "Locket_Gold_Bypass", // Tạo ID giả không trùng lặp
"non_subscriptions": {}
}
};

// Inject Full Quyền (Gold + Khung Viền/Badge)
const premiumFeatures = ["Gold", "Premium", "VIP", "Frame"]; // Bao gồm quyền khung viền

premiumFeatures.forEach(feature => {
jsonToUpdate.subscriber.entitlements[feature] = {
"purchase_date": "2023-01-01T01:01:01Z",
"original_purchase_date": "2023-01-01T01:01:01Z",
"expires_date": "2099-12-31T23:59:59Z",
"is_sandbox": false,
"ownership_type": "PURCHASED",
"store": "app_store",
"product_identifier": "com.locket." + feature.toLowerCase()
};

jsonToUpdate.subscriber.subscriptions["com.locket." + feature.toLowerCase()] = {
"expires_date": "2099-12-31T23:59:59Z",
"original_purchase_date": "2023-01-01T01:01:01Z",
"purchase_date": "2023-01-01T01:01:01Z",
"is_sandbox": false,
"ownership_type": "PURCHASED",
"store": "app_store"
};
});

// Xử lý nhánh mapping (nếu app call endpoint mapping)
if (obj.product_entitlement_mapping) {
for (const [entitlementId, productInfo] of Object.entries(obj.product_entitlement_mapping)) {
const productIdentifier = productInfo.product_identifier;

jsonToUpdate.subscriber.entitlements[entitlementId] = {
"purchase_date": "2023-01-01T01:01:01Z",
"original_purchase_date": "2023-01-01T01:01:01Z",
"expires_date": "2099-12-31T23:59:59Z",
"is_sandbox": false,
"ownership_type": "PURCHASED",
"store": "app_store",
"product_identifier": productIdentifier
};

jsonToUpdate.subscriber.subscriptions[productIdentifier] = {
"expires_date": "2099-12-31T23:59:59Z",
"original_purchase_date": "2023-01-01T01:01:01Z",
"purchase_date": "2023-01-01T01:01:01Z",
"is_sandbox": false,
"ownership_type": "PURCHASED",
"store": "app_store"
};
}
}

// Ghi đè body cũ
body = JSON.stringify(jsonToUpdate);

// Treo 15s để lừa load viền, báo âm thanh không rụng (crash)
setTimeout(() => {
$notification.post(
"Locket Gold & Khung Viền 💛",
"Kích hoạt thành công!",
"Anh yêu ơi, lên Gold và nhận khung viền sau 15 giây rồi nè~",
{"sound": "default"}
);
$done({body});
}, 15000);

} catch (e) {
console.log("Lỗi Parse: " + e);
$done({});
}
} else {
$done({});
}
