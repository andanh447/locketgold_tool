let body = $response.body;

if (body) {
    let obj = JSON.parse(body);
    
    if (obj.data) {
        // Cấp quyền VIP
        obj.data.is_vip = true;
        obj.data.vip_type = 2; // Cờ 2 thường biểu thị gói cao cấp nhất
        obj.data.vip_expire_time = 4102444800; // Timestamp: 01/01/2100
        obj.data.flag = 1;
        
        // Nếu có mảng chứa các quyền lợi chi tiết, force toàn bộ về trạng thái đã mở khóa
        if (obj.data.vip_rights) {
            obj.data.vip_rights.forEach(right => {
                right.is_unlock = true;
            });
        }
    }
    
    // Đóng gói lại dữ liệu và trả về cho app
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
