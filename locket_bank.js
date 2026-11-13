// ============================================================
// Script Fake Notification (Trêu đùa bạn bè khi mở Locket)
// Tác giả: Sếp
// Tương thích: Shadowrocket, Loon, Quantumult X, Surge
// ============================================================

// 👇 SẾP THAY ĐỔI THÔNG TIN Ở CÁC DÒNG NÀY NHÉ 👇
// (Nhớ giữ nguyên cặp dấu ngoặc kép " ")

const appName = "Locket Bank";                 // Tên ứng dụng gửi thông báo
const tieuDe = "Biến động số dư";              // Tiêu đề nhỏ
const taiKhoan = "TK xxxxxx569";               // Số tài khoản che giấu
const soTien = "+1.000.000 VND.";              // Số tiền nhận/trừ
const soDu = "Số dư: 1.569.587VND.";           // Số dư còn lại
const loiNhan = "Nội dung: hôm nay đủ ấm rồi hahahaha"; // Lời nhắn trêu chọc

// ============================================================
// PHẦN CODE XỬ LÝ (SẾP KHÔNG CẦN SỬA PHẦN NÀY)
// ============================================================

// Ghép các dòng lại thành nội dung hoàn chỉnh
const noiDung = taiKhoan + " " + soTien + "\n" + soDu + "\n" + loiNhan;

// Lệnh bắn thông báo (Hỗ trợ hầu hết các app VPN)
if (typeof $notification !== "undefined") {
    $notification.post(appName, tieuDe, noiDung);
} else if (typeof $notify !== "undefined") {
    // Dành riêng cho Quantumult X
    $notify(appName, tieuDe, noiDung);
}

// Trả về dữ liệu gốc để app Locket vẫn hoạt động bình thường không bị lỗi mạng
let responseBody = (typeof $response !== "undefined" && $response.body) ? $response.body : "";

$done({ body: responseBody });
