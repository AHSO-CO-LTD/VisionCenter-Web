const cron = require("node-cron");
const User = require("./models/user.model");

cron.schedule("* * * * *", async () => {
  try {
    await User.deleteResetCodeExpired();
    console.log("Đã xóa mã xác thực hết hạn.");
    await User.deleteVerificationCodeExpired();
    console.log("Đã xóa mã xác thực đăng ký email đã hết hạn.");
  } catch (error) {
    console.error("Lỗi khi xóa mã hết hạn:", error);
  }
});
