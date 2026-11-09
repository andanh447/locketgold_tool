// ============================================================
// LOCKET GOLD VIP - CLEAN CODE BY H.TIẾN (BẢN TỐI ƯU HÓA)
// Tính năng: Unlock Gold, Video 60s (Fix 6MB), Custom Frame
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

// 1. ÉP TRẠNG THÁI VÀ MỞ KHÓA TÍNH NĂNG GOLD
obj.state = "UPDATE";
obj.templateVersion = String(Date.now());
obj.entries = obj.entries || {};

Object.assign(obj.entries, {
    is_gold: "true", has_gold: "true", is_gold_user: "true", user_is_gold: "true", gold_user: "true", gold_active: "true",
    unlocked_filters: "true", all_filters_free: "true",
    camera_filters_enabled: "true", camera_filter_enabled: "true",
    free_filters_enabled: "true",
    require_gold_for_filters: "false", require_gold_for_filter: "false",
    filter_gold_only: "false", filters_gold_only: "false",
    ai_filters_enabled: "true", holiday_filters_enabled: "true",
    profile_badge_visible: "true",
    feature_gates: JSON.stringify({
        app_icon_picker: "enabled", camera_roll: "enabled", locket_views: "enabled", longer_video: "enabled", unlimited_friends: "enabled", custom_widget_frames: "enabled", camera_filters: "enabled", remove_ads: "enabled", video: "enabled"
    })
});

// 2. THÔNG BÁO LÊN GOLD TÙY CHỈNH (Ảnh của Sếp Tiến)
Object.assign(obj.entries, {
    feature_discovery_popup_config: JSON.stringify({
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
    })
});

// 3. FIX VIDEO 60S & VƯỢT GIỚI HẠN 6MB CỦA LOCKET (Trần 150MB)
var MY_VIDEO_DURATION = 60.0;
var QUALITY_MBPS = 0.8;
var durationStr = "60.0";
var MAX_SIZE_BYTES = 157286400; // 150MB
var MAX_SIZE_STR = "157286400";
var MAX_SIZE_MB = 150;
var MAX_SIZE_MB_STR = "150";

var cameraConfig = {
    gold_max_duration: MY_VIDEO_DURATION, goldMaxDuration: MY_VIDEO_DURATION, max_duration: MY_VIDEO_DURATION, maxDuration: MY_VIDEO_DURATION,
    quality_mbps: QUALITY_MBPS, qualityMbps: QUALITY_MBPS
};

var cameraRollConfig = {
    gold_max_duration: MY_VIDEO_DURATION, goldMaxDuration: MY_VIDEO_DURATION, video_max_duration: MY_VIDEO_DURATION, videoMaxDuration: MY_VIDEO_DURATION,
    max_duration: MY_VIDEO_DURATION, maxDuration: MY_VIDEO_DURATION, trim_max_duration: MY_VIDEO_DURATION, trimMaxDuration: MY_VIDEO_DURATION,
    camera_roll_max_duration: MY_VIDEO_DURATION, camera_roll_video_max_duration: MY_VIDEO_DURATION,
    max_file_size: MAX_SIZE_BYTES, max_upload_bytes: MAX_SIZE_BYTES, max_size_bytes: MAX_SIZE_BYTES,
    max_size_mb: MAX_SIZE_MB, video_max_size_mb: MAX_SIZE_MB, camera_roll_max_size_mb: MAX_SIZE_MB,
    quality_mbps: QUALITY_MBPS, qualityMbps: QUALITY_MBPS
};

obj.entries.camera = JSON.stringify(cameraConfig);
obj.entries.camera_roll = JSON.stringify(cameraRollConfig);

Object.assign(obj.entries, {
    camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true", camera_roll_video_upload_enabled: "true",
    longer_camera_roll_videos_enabled: "true",
    camera_roll_video_max_duration: durationStr, camera_roll_max_duration: durationStr, camera_roll_duration: durationStr,
    max_video_duration: durationStr, video_max_duration: durationStr, video_trim_max_duration: durationStr,
    trim_max_duration: durationStr, gold_max_duration: durationStr, goldMaxDuration: durationStr,
    max_file_size: MAX_SIZE_STR, max_upload_bytes: MAX_SIZE_STR, max_size_bytes: MAX_SIZE_STR,
    camera_roll_max_file_size: MAX_SIZE_STR, camera_roll_max_upload_bytes: MAX_SIZE_STR,
    video_max_file_size: MAX_SIZE_STR, video_max_upload_bytes: MAX_SIZE_STR, upload_max_size_bytes: MAX_SIZE_STR,
    max_size_mb: MAX_SIZE_MB_STR, video_max_size_mb: MAX_SIZE_MB_STR, camera_roll_max_size_mb: MAX_SIZE_MB_STR,
    video_quality_mbps: QUALITY_MBPS.toString()
});

// 4. THAY KHUNG ẢNH WIDGET TÙY CHỈNH
Object.assign(obj.entries, {
    widget_frame_event_max_images: "10",
    android_widget_frame_event_enabled: "true",
    widget_frame_event: JSON.stringify({
        uid: "khung_sanrio_htien",
        url: "https://i.ibb.co/fYnJZFJJ/2a-Obo-RB6b1l-JJ7q-PDQF6t-Qo7-Erft-ZLm-Fi-Bcpkt-UW-1.png",
        use_local_time_zone: true,
        placement: "below",
        start_at: "2020-01-01T00:00:00",
        end_at: "2099-12-31T23:59:59"
    }),
    custom_widget_frames: "enabled",
    custom_widget_frames_enabled: "true"
});

// 5. TẮT QUẢNG CÁO & BẢO MẬT
Object.assign(obj.entries, {
    history_ads_mode: "off",
    history_ads_prefetch_count: "0",
    sentry_sample_rate: "0",
    sentry_network_tracing: "false",
    sentry_performance_tracking: "false"
});

$done({
    body: JSON.stringify(obj)
});
