var body = $response.body;
try {
    var obj = JSON.parse(body);
    if (obj && obj.entries) {
        // 1. Mở khóa toàn quyền Locket Gold & Filter gốc
        var goldFlags = {
            "is_gold": true,
            "has_gold": true,
            "is_gold_user": true,
            "user_is_gold": true,
            "camera_filters_enabled": true,
            "free_filters_enabled": true,
            "unlocked_filters": true,
            "all_filters_free": true,
            "require_gold_for_filters": false,
            "filter_paywall_enabled": false,
            "video_quality_mbps": 10.0,
            "max_video_duration": "3600"
        };
        for (var key in goldFlags) {
            obj.entries[key] = goldFlags[key];
        }

        // 2. Chèn Filter hoangtien07 lên đầu (Giữ nguyên các filter gốc)
        if (obj.entries.overlay_items) {
            var overlays = JSON.parse(obj.entries.overlay_items);
            
            var customFilter = {
                "section": "✨ hoangtien07",
                "items": [
                    {
                        "id": "hoangtien07_gold_vip",
                        "caption": { "text": "💻 TikTok: @tz4427" },
                        "overlay_image_url": "https://i.ibb.co/Vc98ms12/2a-Obo-R6m581-AU5h4g-IHMLo8f-Edi-Q4j-Uq-EIXedb-Jg.png",
                        "overlay_type": "camera"
                    }
                ]
            };
            
            overlays.unshift(customFilter); // Đẩy filter của sếp lên top 1
            obj.entries.overlay_items = JSON.stringify(overlays);
        }

        // 3. Ép hiển thị Popup TikTok Welcome
        obj.entries.feature_discovery_popup_config = JSON.stringify({
            tag: "LOCKET GOLD",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Lên LocketGold rồi đó sếp Tiến 🤫 😎",
            feature_set: [{
                title: "Nhớ follow tiktok @tz4427 ✨",
                body: "Một follow của bạn, một niềm vui của mình 💛",
                imageURL: "https://i.ibb.co/Vc98ms12/2a-Obo-R6m581-AU5h4g-IHMLo8f-Edi-Q4j-Uq-EIXedb-Jg.png"
            }],
            primary_button_title: "Xong",
            campaign: "locket_gold_welcome_v3",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        });
    }
    body = JSON.stringify(obj);
} catch (e) {
    console.log("Lỗi Parse JSON: " + e);
}
$done({ body: body });
