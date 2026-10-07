var body = $response.body;
var url = $request.url;

if (body) {
    var obj = JSON.parse(body);
    
    // Ghi đè thông tin user/vip
    if (url.indexOf("/user/info") !== -1 || url.indexOf("/vip/info") !== -1) {
        if (obj.data) {
            obj.data.is_vip = true;
            obj.data.vip_type = 2; // VIP Premium
            obj.data.vip_expire_time = 4102444800000; // Hạn đến 2100
        }
    }
    
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
