let body = $response.body;

try {
    let obj = JSON.parse(body);

    // 1. Mở khóa thông tin User VIP
    if (obj.data) {
        // Gán cờ VIP chung
        obj.data.is_vip = true;
        obj.data.vip_status = 1;
        obj.data.vip_expire_time = 4102444800; // Hạn dùng đến năm 2100

        // Gán cờ VIP trong object con vip_info (nếu có)
        if (obj.data.vip_info) {
            obj.data.vip_info.is_vip = true;
            obj.data.vip_info.vip_status = 1;
            obj.data.vip_info.status = 1;
        }
        
        // Mở quyền dùng mẫu (template) và các tính năng trả phí
        if (obj.data.privileges) {
            obj.data.privileges.forEach(privilege => {
                privilege.has_privilege = true;
            });
        }
    }

    // 2. Mở khóa cấu hình User_info
    if (obj.user_info) {
        obj.user_info.is_vip = true;
        obj.user_info.vip_status = 1;
    }

    // 3. Ép cờ mở khóa 4K / Export (Trường hợp API trả về giới hạn cấu hình)
    if (obj.config) {
        obj.config.enable_4k = true;
        obj.config.watermark_enable = false; // Tắt watermark
    }

    body = JSON.stringify(obj);
} catch (e) {
    // Bỏ qua nếu response không phải JSON hợp lệ
}

$done({ body: body });
