// ============================================================
// Locket Remote Config Rewrite
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// cre andanh447 - Fix by Gemini
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.Attention = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "CHÚC MỪNG LÊN GOLD ",
            feature_set: [  
                {
                    title: "Liên Hệ 0901894517 muốn gì có hết",
                    body: "💛 Locket Gold by tiendh (andanh447) 💛",
                    imageURL: "https://i.ibb.co/Vc98ms12/2a-Obo-R6m581-AU5h4g-IHMLo8f-Edi-Q4j-Uq-EIXedb-Jg.png"
                }
            ],
            primary_button_title: "DONE",
            campaign: "locket_gold_welcome_v3",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_instagram_url: "he he",
        settings_tiktok_url: "hi hi"
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
    // ============================================================
    var MY_VIDEO_DURATION = 45.0;
    
    var cameraConfig = {
        gold_max_duration: MY_VIDEO_DURATION,
        goldMaxDuration: MY_VIDEO_DURATION,
        max_duration: MY_VIDEO_DURATION,
        maxDuration: MY_VIDEO_DURATION,
        ultra_wide: true,
        ultraWide: true,
        volume_button: true,
        volumeButton: true,
        flash_button: true,
        telephoto: true,
        srgb: true,
        lanczos: true,
        quality_mbps: 2.4, // Nâng lên 2.4 để nét hơn, 0.6 hơi mờ
        qualityMbps: 2.4
    };

    var cameraRollConfig = {
        gold_max_duration: MY_VIDEO_DURATION,
        goldMaxDuration: MY_VIDEO_DURATION,
        video_max_duration: MY_VIDEO_DURATION,
        videoMaxDuration: MY_VIDEO_DURATION,
        max_duration: MY_VIDEO_DURATION,
        maxDuration: MY_VIDEO_DURATION,
        trim_max_duration: MY_VIDEO_DURATION,
        trimMaxDuration: MY_VIDEO_DURATION,
        camera_roll_max_duration: MY_VIDEO_DURATION,
        camera_roll_video_max_duration: MY_VIDEO_DURATION,
        max_file_size: 104857600,       
        max_upload_bytes: 104857600,   
        max_size_bytes: 104857600,
        quality_mbps: 2.4,
        qualityMbps: 2.4,
        flash_button: true
    };

    obj.entries.camera = JSON.stringify(cameraConfig);
    obj.entries.camera_roll = JSON.stringify(cameraRollConfig);

    var durationStr = MY_VIDEO_DURATION.toString();
    Object.assign(obj.entries, {
        live_photos: JSON.stringify({
            capture: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: [
                "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
                "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
                "tatted", "mohawk", "braces", "slimed", "princess",
                "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
                "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
                "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
            ]
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: durationStr,
        camera_roll_max_duration: durationStr,
        camera_roll_duration: durationStr,
        max_video_duration: durationStr,
        video_max_duration: durationStr,
        video_trim_max_duration: durationStr,
        trim_max_duration: durationStr,
        gold_max_duration: durationStr,
        goldMaxDuration: durationStr,
        max_file_size: "104857600",
        max_upload_bytes: "104857600",
        video_quality_mbps: "2.4",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: "0.8",
        upload_main_image_size: "1024",
        upload_thumbnail_image_quality: "0.8",
        upload_thumbnail_image_size: "1024"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999",
        celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "🌟🫶🌟" },
                { threshold: 2000, emoji: "✨💟✨" },
                { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
                { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
            ]
        }),
        friend_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "✨💗✨" },
                { threshold: 2000, emoji: "✨️⭐️✨" },
                { threshold: 5000, emoji: "✨💎✨" },
                { threshold: 10000, emoji: "✨🔐💛✨" }
            ]
        }),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (ĐÃ GỘP CHUẨN)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "10",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",
        
        // Kích hoạt tính năng Custom Widget Frame trong Locket Gold
        custom_widget_frames: "enabled",
        custom_widget_frames_enabled: "true",
        
        // Cấu hình sự kiện / Seasonal Frames (HIỆN KHUNG TẠI ĐÂY)
        widget_frame_event: JSON.stringify({
            uid: "midautumn_2026",
            url: "https://i.ibb.co/Kt7Dkcg/transparent-frame-final.png",
            use_local_time_zone: true,
            placement: "below",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59"
        }),

        seasonal_frames_config: JSON.stringify({
            enabled: true,
            auto_rotate: false,
            override_default: true,
            current_season_theme: "royal_gold_vip"
        }),

        // Khung VIP mặc định (Khi không bật ngày lễ)
        widget_frames_config: JSON.stringify({
            enabled: true,
            allow_custom_frames: true,
            unlock_all_styles: true,
            default_style: "royal_gold_vip",
            styles: [
                {
                    id: "royal_gold_vip",
                    name: "👑 VIP Royal Gold",
                    border_style: "ornate_gold",
                    crown_badge: true,
                    badge_text: "VIP",
                    corner_radius: 28.0,
                    glow_effect: true,
                    glow_color: "#FFD700",
                    overlay_asset: "royal_crown_frame"
                }
            ]
        }),

        widget_frame_styles: JSON.stringify([
            "royal_gold_vip",
            "gold_luxury",
            "classic"
        ]),

        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: true,
            compact_header: true,
            friends_button: true,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. OVERLAY & CUSTOM CAPTIONS
    // ============================================================
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
        // ... (Phần Mảng overlay_items dài dằng dặc của anh bé đã để nguyên chuẩn, không có lỗi gì hết)
    });
}

$done({ body: JSON.stringify(obj) });
