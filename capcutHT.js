let body = $response.body;

try {
    let obj = JSON.parse(body);

    // Xử lý dữ liệu cấp độ chung (Data level)
    if (obj.data) {
        // Kích hoạt VIP & Team Pro toàn diện
        obj.data.is_vip = true;
        obj.data.vip_status = 1;
        obj.data.vip_expire_time = 4102444800; // Hạn dùng đến năm 2100
        obj.data.is_team_vip = true;
        obj.data.team_vip_status = 1;
        obj.data.space_vip_status = 1;

        // Mở khóa thông tin Vip Info chi tiết
        if (obj.data.vip_info) {
            obj.data.vip_info.is_vip = true;
            obj.data.vip_info.vip_status = 1;
            obj.data.vip_info.status = 1;
            obj.data.vip_info.expired_time = 4102444800;
        }

        // Mở khóa không gian Team / Space
        if (obj.data.space_info) {
            obj.data.space_info.is_vip = true;
            obj.data.space_info.vip_status = 1;
            obj.data.space_info.capacity = 10995116277760; // 10TB Cloud Storage
            obj.data.space_info.used_capacity = 0;
            obj.data.space_info.expired_time = 4102444800;
        }

        // Mở khóa thông tin Team & quyền Admin
        if (obj.data.team_info) {
            obj.data.team_info.is_vip = true;
            obj.data.team_info.vip_status = 1;
            obj.data.team_info.role = 1; // Quản trị viên nhóm
        }

        // Kích hoạt toàn bộ đặc quyền (Privileges) và hiệu ứng
        if (obj.data.privileges && Array.isArray(obj.data.privileges)) {
            obj.data.privileges.forEach(p => {
                p.has_privilege = true;
                p.status = 1;
            });
        }
        
        if (obj.data.team_privileges && Array.isArray(obj.data.team_privileges)) {
            obj.data.team_privileges.forEach(p => {
                p.has_privilege = true;
                p.status = 1;
            });
        }
    }

    // Xử lý cấp độ User Info
    if (obj.user_info) {
        obj.user_info.is_vip = true;
        obj.user_info.vip_status = 1;
    }

    // Mở khóa cấu hình xuất file (4K, 60fps, không watermark)
    if (obj.config) {
        obj.config.enable_4k = true;
        obj.config.max_resolution = "4k";
        obj.config.watermark_enable = false;
        obj.config.export_hd = true;
    }

    body = JSON.stringify(obj);
} catch (e) {
    // Bỏ qua nếu response không phải định dạng JSON
}

$done({ body: body });
