const cron = require("node-cron");
const User = require("./models/user.model");

cron.schedule("* * * * *", async () => {
  try {
    await User.deleteResetCodeExpired();

    await User.deleteVerificationCodeExpired();
  } catch (error) {
    console.error("Lỗi khi xóa mã hết hạn:", error);
  }
});
