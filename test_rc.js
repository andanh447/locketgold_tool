// ============================================================
// Locket Remote Config Pro - Photobooth & Custom Captions
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// ============================================================

var obj = {};
try {
    obj = JSON.parse($response.body);
} catch (e) {
    obj = {};
}

if (!obj || typeof obj !== "object") {
    obj = {};
}

obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.entries = obj.entries || {};

// ============================================================
// 1. CẤU HÌNH GOLD & FEATURE GATES
// ============================================================
const enableFeatures = {
    app_icon_picker: "enabled",
    camera_roll: "enabled",
    camera_theme: "enabled",
    locket_views: "enabled",
    long_captions: "enabled",
    longer_video: "enabled",
    unlimited_friends: "enabled",
    remove_ads: "enabled",
    video: "enabled",
    custom_widget_frames: "enabled",
    streak_recovery: "enabled",
    camera_filters: "enabled",
    ai_filters: "enabled",
    photo_filters: "enabled",
    profile_customization: "enabled"
};
obj.entries.feature_gates = JSON.stringify(enableFeatures);

// Tắt Paywall
const disableUpsell = {
    app_icon_picker: false,
    camera_roll: false,
    locket_views: false,
    remove_ads: false,
    custom_widget_frames: false,
    filter: false,
    filters: false,
    camera_filter: false,
    camera_filters: false,
    holiday_filter: false,
    ai_filter: false,
    ai_filters: false
};
obj.entries.upsell_features = JSON.stringify(disableUpsell);

// Cấu hình không giới hạn
Object.assign(obj.entries, {
    is_gold: "true",
    is_gold_user: "true",
    has_gold: "true",
    camera_filters_enabled: "true",
    ai_filters_enabled: "true",
    camera_filter_gold_only: "false",
    camera_filters_gold_only: "false",
    filter_paywall_enabled: "false",
    camera_filter_paywall_enabled: "false",
    require_gold_for_filters: "false",
    free_filters_enabled: "true",
    camera_filter_max_count: "100",
    max_camera_filters: "100",
    video_quality_mbps: "5.0",
    max_video_duration: "3600"
});

// Popup Welcome
obj.entries.feature_discovery_popup_config = JSON.stringify({
    tag: "LOCKET GOLD ĐHT",
    tag_gradient: true,
    tag_style: "gold_gradient",
    title: "Lên LocketGold rồi đó 🤫 😎",
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

// ============================================================
// 2. XỬ LÝ MẢNG PHOTOBOOTH VÀ CAPTION (GIỮ LẠI FILTER GỐC)
// ============================================================
var existingOverlays = [];
try {
    if (obj.entries.overlay_items) {
        existingOverlays = JSON.parse(obj.entries.overlay_items);
    }
} catch (e) {}

var customOverlays = [
    {
        "section": "📸 Photobooth Studio",
        "items": [
            {
                "id": "pb_4cut_korea",
                "caption": { "text": "Hàn Quốc 4-Cut" },
                "overlay_image_url": "https://i.ibb.co/Y2B0m8J/4cut-frame.png",
                "overlay_type": "camera"
            },
            {
                "id": "pb_vintage_film",
                "caption": { "text": "Film Cổ Điển" },
                "overlay_image_url": "https://i.ibb.co/L5Qz8n0/vintage-frame.png",
                "overlay_type": "camera"
            },
            {
                "id": "pb_polaroid",
                "caption": { "text": "Polaroid Trắng" },
                "overlay_image_url": "https://i.ibb.co/6rW8V0f/polaroid.png",
                "overlay_type": "camera"
            }
        ]
    },
    {
        "section": "🎨 Tình yêu & Cơm chó 💕",
        "items": [
            {
                "overlay_id": "caption:em_nho_anhh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#FF6B81", "#FF8E9E", "#FFB3C6"]
                    },
                    "icon": { "data": "🥺", "type": "emoji" },
                    "max_lines": 1,
                    "text": "em nhớ anhh",
                    "text_color": "#8C1938",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:nho_anh_phien",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#F0B5CB", "#F6D0DF", "#DCCAF0"]
                    },
                    "icon": { "data": "🥺", "type": "emoji" },
                    "max_lines": 1,
                    "text": "nhớ anh tới mức hơi phiền",
                    "text_color": "#70445A",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:minh_cuoi_nhau",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#F0B8CD", "#F7D4DF", "#E7C9EF"]
                    },
                    "icon": { "data": "💍", "type": "emoji" },
                    "max_lines": 1,
                    "text": "hông ấy mình cưới nhau đi",
                    "text_color": "#70465B",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🎨 Trend TikTok",
        "items": [
            {
                "overlay_id": "caption:hoi_chieu_troi_mua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#546E7A", "#263238"]
                    },
                    "icon": { "data": "🌧️", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Hồi chiều trời mưa...",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:xinh_dep_tuyet_voi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#FC5C7D", "#6A82FB"]
                    },
                    "icon": { "data": "💅", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Xinh đẹp tuyệt vời",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:flex_den_hoi_tho_cuoi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#F7971E", "#FFD200"]
                    },
                    "icon": { "data": "💎", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Flex đến hơi thở cuối",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🎨 Đời sống & Vui nhộn",
        "items": [
            {
                "overlay_id": "caption:ngay_moi_vui_ve",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#4CAF50", "#2E7D32"]
                    },
                    "icon": { "data": "☀️", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Ngày mới vui vẻ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:an_com_chua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#FF9800", "#F57C00"]
                    },
                    "icon": { "data": "🍽️", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Ăn cơm chưa?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cuoi_xiu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#FFEB3B", "#FF9800"]
                    },
                    "icon": { "data": "😎", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Cười xỉu",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:bat_on_that_su",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": ["#636363", "#A2AB58"]
                    },
                    "icon": { "data": "🫠", "type": "emoji" },
                    "max_lines": 1,
                    "text": "Bất ổn thật sự",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    }
];

Object.assign(obj.entries, {
    overlay_navigator_enabled: "true",
    overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
    captions_enabled: "true",
    music_caption_enabled: "true",
    music_caption_song_preview_enabled: "true",
    link_caption_link_enabled: "true",
    overlay_dynamic_captions: JSON.stringify([
        "standard", "poll", "color_palette", "review", "music", "location",
        "weather", "time", "streak", "star_sign", "party_time", "locket_count",
        "good_morning", "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
    ]),
    // Nối mảng Photobooth & Caption lên trước các Filter có sẵn
    overlay_items: JSON.stringify(customOverlays.concat(existingOverlays))
});

$done({
    body: JSON.stringify(obj)
});
