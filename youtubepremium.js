package com.hoangtien.ytbpremium;

import android.annotation.SuppressLint;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import java.io.ByteArrayInputStream;
import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {

private WebView webView;

// Danh sách các domain quảng cáo và theo dõi của YouTube/Google bị Hoàng Tiến block
private static final List<String> AD_DOMAINS = Arrays.asList(
"doubleclick.net",
"googleads.g.doubleclick.net",
"googlesyndication.com",
"pagead2.googlesyndication.com",
"pubads.g.doubleclick.net",
"adservice.google.com",
"adservice.google.com.vn",
"youtube.com/pagead/",
"youtube.com/ptracking",
"youtube.com/api/stats/ads",
"googleads4.g.doubleclick.net",
"video-stats.l.google.com"
);

@SuppressLint("SetJavaScriptEnabled")
@Override
protected void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
setContentView(R.layout.activity_main);

// Hiển thị Toast thông báo độc quyền khi khởi động ứng dụng
Toast.makeText(this, "Hệ thống chống quảng cáo độc quyền bởi Hoàng Tiến - Sẵn Sàng!", Toast.LENGTH_LONG).show();

webView = findViewById(R.id.webView);

// Tối ưu hóa cấu hình WebView
webView.getSettings().setJavaScriptEnabled(true);
webView.getSettings().setDomStorageEnabled(true);
webView.getSettings().setUserAgentString("Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36");

webView.setWebViewClient(new WebViewClient() {

// 1. CHỐNG QUẢNG CÁO ĐỘC QUYỀN (Intercept & Block Ads)
@Override
public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
String url = request.getUrl().toString();

// Quét qua danh sách đen, chặn đứng các Request quảng cáo trước khi tải
for (String adDomain : AD_DOMAINS) {
if (url.contains(adDomain)) {
// Trả về response rỗng (0.0.0.0) để hủy yêu cầu, không cho QC tải
return new WebResourceResponse("text/plain", "UTF-8", new ByteArrayInputStream("".getBytes()));
}
}
return super.shouldInterceptRequest(view, request);
}

@Override
public void onPageStarted(WebView view, String url, Bitmap favicon) {
super.onPageStarted(view, url, favicon);
}

// 2. BIẾN ĐỔI LOGO SANG PREMIUM ĐỘC QUYỀN (JS Injection)
@Override
public void onPageFinished(WebView view, String url) {
super.onPageFinished(view, url);

// Inject Javascript để ghi đè Logo YouTube thành Logo Hoàng Tiến Premium
String injectJS = "javascript:(function() { " +
"function changeToPremium() { " +
" var logo = document.querySelector('a#logo, .yt-header-logo-link, ytm-brand-logo-link'); " +
" if (logo) { " +
" logo.innerHTML = '" +
" <div style=\"display:flex; align-items:center; color:#FF0000; font-weight:bold; font-size:18px; font-family:sans-serif;\">" +
" <span style=\"background:#FF0000; color:#FFFFFF; padding:2px 6px; border-radius:4px; font-size:12px; margin-right:5px;\">▶</span>" +
" Hoàng Tiến Premium <span style=\"font-size:14px; margin-left:3px;\">👑</span>" +
" </div>';" +
" } " +
" var adsElements = document.querySelectorAll('ytm-promoted-sparkles-web-renderer, .ad-showing, .ad-container, .ytp-ad-overlay-container, .ytm-promoted-item, ytm-companion-ad-renderer'); " +
" for (var i = 0; i < adsElements.length; i++) { " +
" adsElements[i].remove(); " +
" } " +
"} " +
// Chạy hàm kiểm tra và sửa đổi liên tục để xử lý DOM thay đổi động của YTB
"setInterval(changeToPremium, 500); " +
"})()";

webView.evaluateJavascript(injectJS, null);
}
});

// Tải YouTube
webView.loadUrl("https://m.youtube.com");
}

@Override
public void onBackPressed() {
if (webView.canGoBack()) {
webView.goBack();
} else {
super.onBackPressed();
}
}
}
