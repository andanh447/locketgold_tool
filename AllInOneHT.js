package com.hoangtien.universalvip;

import de.robv.android.xposed.IXposedHookLoadPackage;
import de.robv.android.xposed.XC_MethodHook;
import de.robv.android.xposed.XC_MethodReplacement;
import de.robv.android.xposed.XposedBridge;
import de.robv.android.xposed.XposedHelpers;
import de.robv.android.xposed.callbacks.XC_LoadPackage.LoadPackageParam;

import java.util.Arrays;
import java.util.List;
import java.util.Date;

/**
* HOÀNG TIẾN - SUPER UNIVERSAL VIP MODULE
* Xử lý bẻ khóa trọn bộ 22 Apps (Locket Gold 0/0/0000, YTB, Spotify, RevenueCat All-in-One)
*/
public class HoangTienUniversalMod implements IXposedHookLoadPackage {

// Danh sách Package Name của 18+ App sử dụng RevenueCat / IAP
private static final List<String> REVENUECAT_VIP_APPS = Arrays.asList(
"com.picsart.studio", // 5. picsart
"video.mojo", // 6. mojo
"com.linecorp.soda.android", // 7. soda
"com.salavat.khanov.mac.oneblocker", // 8. 1blocker
"com.clica.app", // 9. clica
"com.chic.camera", // 10. chic
"com.campmobile.snow", // 11. snow
"com.microblink.photomath", // 12. photomath
"com.cardinalblue.piccollage.google", // 13. piccollage
"com.collart.photo.editor", // 14. collart
"com.smallpdf.app", // 15. smallpdf
"com.ilovepdf.www", // 16. ilovepdf
"com.vsco.cam", // 17. vsco
"com.pixelance.app", // 18. pixelance
"com.intsig.camscanner", // 19. camscanner
"com.adobe.psmobile", // 20. photoshop
"com.alightcreative.motion", // 21. alightmotion
"com.nexstreaming.app.kinemasterfree" // 22. kinemaster
);

@Override
public void handleLoadPackage(final LoadPackageParam lpparam) throws Throwable {

// =========================================================
// 1. APP 4: LOCKET GOLD 15S + ÉP NGÀY 00/00/0000
// =========================================================
if (lpparam.packageName.equals("com.locket.android")) {
XposedBridge.log("ĐHT Lab: Hook Locket - Kích hoạt Gold & Ép ngày 00/00/0000");

// Ép ngày hiển thị thành 00/00/0000
XposedHelpers.findAndHookMethod("java.text.SimpleDateFormat", lpparam.classLoader, "format", Date.class, new XC_MethodHook() {
@Override
protected void beforeHookedMethod(MethodHookParam param) throws Throwable {
param.setResult("00/00/0000"); // Ghi đè hiển thị ngày
}
});

// Ép quyền Locket Gold & Giới hạn video 15s
try {
Class<?> userManagerClass = XposedHelpers.findClass("com.locket.android.data.UserManager", lpparam.classLoader);
XposedHelpers.findAndHookMethod(userManagerClass, "isGoldMember", XC_MethodReplacement.returnConstant(true));
XposedHelpers.findAndHookMethod(userManagerClass, "getVideoLimitDuration", XC_MethodReplacement.returnConstant(15000));
} catch (Throwable t) {
// Ignore obfucastion errors
}
return;
}

// =========================================================
// 2. APP 1: YOUTUBE PREMIUM & NO ADS
// =========================================================
if (lpparam.packageName.equals("com.google.android.youtube")) {
XposedBridge.log("ĐHT Lab: Hook YouTube - Chống quảng cáo");
try {
Class<?> adHelperClass = XposedHelpers.findClass("com.google.android.apps.youtube.app.player.helper.PlayerHelper", lpparam.classLoader);
XposedHelpers.findAndHookMethod(adHelperClass, "shouldShowAds", XC_MethodReplacement.returnConstant(false));

Class<?> backgroundClass = XposedHelpers.findClass("com.google.android.apps.youtube.app.background.BackgroundPlaybackManager", lpparam.classLoader);
XposedHelpers.findAndHookMethod(backgroundClass, "isBackgroundPlaybackEnabled", XC_MethodReplacement.returnConstant(true));
} catch (Throwable t) {}
return;
}

// =========================================================
// 3. APP 2 & 3: SPOTIFY & SOUNDCLOUD PREMIUM
// =========================================================
if (lpparam.packageName.equals("com.spotify.music")) {
XposedBridge.log("ĐHT Lab: Hook Spotify Premium");
try {
Class<?> sessionClass = XposedHelpers.findClass("com.spotify.mobile.android.core.internal.Session", lpparam.classLoader);
XposedHelpers.findAndHookMethod(sessionClass, "isPremium", XC_MethodReplacement.returnConstant(true));
} catch (Throwable t) {}
return;
}

if (lpparam.packageName.equals("com.soundcloud.android")) {
XposedBridge.log("ĐHT Lab: Hook SoundCloud Go+");
try {
Class<?> userObj = XposedHelpers.findClass("com.soundcloud.android.accounts.UserInfo", lpparam.classLoader);
XposedHelpers.findAndHookMethod(userObj, "isPremium", XC_MethodReplacement.returnConstant(true));
XposedHelpers.findAndHookMethod(userObj, "hasAds", XC_MethodReplacement.returnConstant(false));
} catch (Throwable t) {}
return;
}

// =========================================================
// 4. CHUỖI 18 APP CÒN LẠI (REVENUECAT UNIVERSAL BYPASS)
// =========================================================
if (REVENUECAT_VIP_APPS.contains(lpparam.packageName)) {
XposedBridge.log("ĐHT Lab: Kích hoạt RevenueCat VIP cho app: " + lpparam.packageName);
try {
// Hook vào class kiểm tra quyền lợi (Entitlements) của SDK RevenueCat
Class<?> rcEntitlementsClass = XposedHelpers.findClass("com.revenuecat.purchases.EntitlementInfo", lpparam.classLoader);

// Trả về true cho isActive (Báo cho app biết VIP đang kích hoạt)
XposedHelpers.findAndHookMethod(rcEntitlementsClass, "isActive", XC_MethodReplacement.returnConstant(true));

// Ép định danh gói VIP thành god mode của anh
XposedHelpers.findAndHookMethod(rcEntitlementsClass, "getIdentifier", XC_MethodReplacement.returnConstant("com.hoangtien.premium.all"));

// Bypass thêm hàm kiểm tra của Google Play Billing Client để cắt đứt liên kết xác thực với Store
Class<?> billingClientClass = XposedHelpers.findClass("com.android.billingclient.api.BillingClient", lpparam.classLoader);
XposedHelpers.findAndHookMethod(billingClientClass, "isReady", XC_MethodReplacement.returnConstant(true));

} catch (Throwable t) {
XposedBridge.log("ĐHT Lab Error: App " + lpparam.packageName + " đã đổi SDK hoặc bị obfuscate sâu.");
}
}
}
}
