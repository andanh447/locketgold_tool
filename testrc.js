// [Technical_Root_Access] Locket Photobooth & UI Injector
let body = $response.body;

try {
    let obj = JSON.parse(body);
    
    if (obj && obj.entries) {
        // Xử lý mảng Photobooth an toàn, chống crash (Timeout/Syntax Error)
        if (obj.entries.overlay_items) {
            let overlays = [];
            try {
                overlays = JSON.parse(obj.entries.overlay_items);
            } catch(e) {} // Bỏ qua lỗi parse mảng gốc nếu có

            // Payload khung ảnh độc lập (Không bị phụ thuộc server ngoài)
            let pbPayload = [
                {
                    "section": "👑 hoangtien07 VIP",
                    "items": [
                        {
                            "id": "ht07_tiktok_tag",
                            "caption": { "text": "💻 @tz4427" },
                            "overlay_image_url": "https://i.ibb.co/Vc98ms12/2a-Obo-R6m581-AU5h4g-IHMLo8f-Edi-Q4j-Uq-EIXedb-Jg.png",
                            "overlay_type": "camera"
                        }
                    ]
                },
                {
                    "section": "📸 Photobooth Studio",
                    "items": [
                        {
                            "id": "pb_vintage_film",
                            "caption": { "text": "Vintage Film" },
                            "overlay_image_url": "https://i.ibb.co/L5Qz8n0/vintage-frame.png", 
                            "overlay_type": "camera"
                        },
                        {
                            "id": "pb_4cut_korea",
                            "caption": { "text": "4-Cut Korea" },
                            "overlay_image_url": "https://i.ibb.co/Y2B0m8J/4cut-frame.png",
                            "overlay_type": "camera"
                        }
                    ]
                }
            ];

            // Nối mảng: Khung custom hiện lên đầu, sau đó đến các khung hệ thống tải được
            obj.entries.overlay_items = JSON.stringify(pbPayload.concat(overlays));
        }

        // Bơm Popup Welcome Locket Gold
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
} catch (error) {
    console.log("[PHOTOBOOTH_INJECT_ERR] " + error.message);
}

$done({ body: body });
