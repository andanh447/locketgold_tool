import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class ShadowRunner {
    public static void main(String[] args) {
        // 1. Cấu hình ChromeOptions để chạy ẩn (Headless) và giả lập Media Stream
        ChromeOptions options = new ChromeOptions();
        
        // Kích hoạt chế độ Headless mới của Chrome (chạy ngầm không hiện giao diện)
        options.addArguments("--headless=new");
        
        // Các cờ bắt buộc để giả lập Camera/Microphone trong môi trường Headless
        options.addArguments("--use-fake-device-for-media-stream");
        options.addArguments("--use-fake-ui-for-media-stream");
        
        // Các tùy chọn bổ sung cho môi trường Server/Lab
        options.addArguments("--disable-gpu");
        options.addArguments("--no-sandbox");
        options.addArguments("--disable-dev-shm-usage");

        // Khởi tạo WebDriver
        WebDriver driver = new ChromeDriver(options);

        try {
            // Mở một trang web bất kỳ (hoặc trang local của anh)
            driver.get("about:blank");

            // 2. Đoạn mã JavaScript xử lý game và quay video đã chuẩn bị trước
            String script = 
                "let playerGold = 50;\n" +
                "const GOLD_THRESHOLD = 100;\n" +
                "let mediaRecorder;\n" +
                "let recordedChunks = [];\n" +
                "\n" +
                "async function runAutomation() {\n" +
                "    console.log('Bắt đầu quy trình chạy ngầm...');\n" +
                "    try {\n" +
                "        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });\n" +
                "        mediaRecorder = new MediaRecorder(stream);\n" +
                "        \n" +
                "        mediaRecorder.ondataavailable = e => {\n" +
                "            if (e.data.size > 0) recordedChunks.push(e.data);\n" +
                "        };\n" +
                "        \n" +
                "        mediaRecorder.onstop = () => {\n" +
                "            const blob = new Blob(recordedChunks, { type: 'video/webm' });\n" +
                "            console.log('Đã tạo Blob video thành công, kích thước: ' + blob.size + ' bytes');\n" +
                "        };\n" +
                "        \n" +
                "        mediaRecorder.start();\n" +
                "        console.log('Đang quay video ngầm...');\n" +
                "        \n" +
                "        setTimeout(() => {\n" +
                "            mediaRecorder.stop();\n" +
                "            console.log('Đã dừng quay video ngầm.');\n" +
                "        }, 4000);\n" +
                "        \n" +
                "    } catch (err) {\n" +
                "        console.error('Lỗi MediaStream:', err);\n" +
                "    }\n" +
                "}\n" +
                "runAutomation();";

            // 3. Thực thi đoạn mã JS trực tiếp trong trình duyệt đang chạy ngầm
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript(script);

            // Chờ một khoảng thời gian để quá trình quay ngầm hoàn tất
            Thread.sleep(6000);
            System.out.println("Hoàn thành tác vụ chạy shadow qua Java!");

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            // Đóng trình duyệt
            driver.quit();
        }
    }
}
