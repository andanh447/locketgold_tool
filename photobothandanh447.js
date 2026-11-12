// Script Phân tích và Ghi đè (Dành cho Lab Testing)
let body = $response.body;
try {
    let obj = JSON.parse(body);
    
    // --- BƯỚC 1: XÁC THỰC TRẠNG THÁI ---
    if (obj && obj.entries) {
        // Cấp quyền giả lập các flag liên quan đến Subscription/Premium
        let premiumFlags = [
            "is_gold", 
            "is_gold_user", 
            "has_gold", 
            "user_is_gold", 
            "camera_filters_enabled", 
            "free_filters_enabled", 
            "unlocked_filters", 
            "all_filters_free"
        ];
        
        for (let flag of premiumFlags) {
            obj.entries[flag] = true;
        }
        
        // Vô hiệu hóa Paywall
        let paywallFlags = [
            "require_gold_for_filters", 
            "requires_gold_for_filters", 
            "filter_paywall_enabled", 
            "filter_requires_gold", 
            "camera_filters_require_gold"
        ];
        
        for (let flag of paywallFlags) {
            obj.entries[flag] = false;
        }
        
        // Điều chỉnh thông số kỹ thuật (Ví dụ: Video)
        obj.entries["video_quality_mbps"] = 10.0;
        obj.entries["max_video_duration"] = "3600";

        // --- BƯỚC 2: QUẢN LÝ TÀI NGUYÊN (FILTERS/OVERLAYS) ---
        if (obj.entries.overlay_items) {
            // Thay vì tải từ một endpoint bên ngoài có thể gây timeout, 
            // ta chèn trực tiếp data (mock data) vào đầu mảng.
            let overlays = JSON.parse(obj.entries.overlay_items);
            
            let customItem = {
                "section": "⭐ Custom Lab Category",
                "items": [
                    {
                        "id": "lab_test_filter_01",
                        "caption": { "text": "Lab Env - 01" },
                        // Sử dụng URL ảnh tĩnh, ổn định cho mục đích test
                        "overlay_image_url": "https://i.ibb.co/Vc98ms12/2a-Obo-R6m581-AU5h4g-IHMLo8f-Edi-Q4j-Uq-EIXedb-Jg.png", 
                        "overlay_type": "camera"
                    }
                ]
            };
            
            overlays.unshift(customItem);
            obj.entries.overlay_items = JSON.stringify(overlays);
        }

        // --- BƯỚC 3: MÔ PHỎNG POPUP ---
        obj.entries.feature_discovery_popup_config = JSON.stringify({
            tag: "STATUS",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Kết nối Lab thành công",
            feature_set: [{
                title: "Thông báo Hệ thống",
                body: "Script phân tích đang hoạt động ổn định.",
                imageURL: "https://i.ibb.co/Vc98ms12/2a-Obo-R6m581-AU5h4g-IHMLo8f-Edi-Q4j-Uq-EIXedb-Jg.png"
            }],
            primary_button_title: "Xác nhận",
            campaign: "lab_test_popup",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        });
    }
    
    body = JSON.stringify(obj);
} catch (error) {
    // Log lỗi để debug trong quá trình test
    console.log("JSON Parse Error: " + error.message);
}

// Trả về response đã được modify
$done({ body: body });
