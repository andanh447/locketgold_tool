// ========= ID ========= //
const mapping = {
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @andanh447 ========= // 
var ua = (typeof $request !== "undefined" && $request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
var obj = {};
try {
  obj = JSON.parse($response.body);
} catch (e) {
  obj = {};
}
if (!obj || typeof obj !== "object") {
  obj = {};
}
obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var minhhiep08 = {
      auto_resume_date: null,
      display_name: "locket_1600_1y",
      is_sandbox: true,
      ownership_type: "PURCHASED",
      billing_issues_detected_at: null,
      management_url: "https://apps.apple.com/account/subscriptions",
      period_type: "normal",
      price: {
          "amount": 399000.0,
          "currency": "VND"
      },
      expires_date: "9999-01-09T10:10:14Z",
      grace_period_expires_date: null,
      refunded_at: null,
      unsubscribe_detected_at: null,
      original_purchase_date: "2005-01-09T10:10:15Z",
      purchase_date: "2005-01-09T10:10:14Z",
      store: "app_store",
      store_transaction_id: "2000001108724193",
  },
  locketGold = {
      grace_period_expires_date: null,
      purchase_date: "2005-01-09T10:10:14Z",
      product_identifier: "locket_1600_1y",
      expires_date: "9999-01-09T10:10:14Z"
  };
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

const subKeys = [
  "locket_1600_1y",
  "Gold",
  "gold",
  "pro",
  "locket_gold",
  "Locket Gold",
  "holiday_effects",
  "camera_filters"
];
subKeys.forEach(function(k) {
  obj.subscriber.subscriptions[k] = minhhiep08;
});

const entKeys = [
  "Gold",
  "gold",
  "pro",
  "locket_gold",
  "Locket Gold",
  "holiday_effects",
  "camera_filters",
  "holiday_filter",
  "holidays",
  "effects",
  "filters"
];
entKeys.forEach(function(k) {
  obj.subscriber.entitlements[k] = locketGold;
});

$done({
  body: JSON.stringify(obj)
});
