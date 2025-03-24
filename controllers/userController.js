const userModel = require("../models/userModel");

class UserController {
  getAll = async (req, res) => {
    const users = await userModel.find().select("-password");
    return res.json({ success: true, data: users });
  };

  register = async (req, res) => {
    const { email, password, username } = req.body;

    const userExists = await userModel.findOne({ email });

    if (userExists) {
      return res.json({ success: false, message: "Email đã tồn tại!" });
    }
    await userModel
      .create({ email, password, username })
      .then(() => {
        return res.json({ success: true, message: "Tài khoản đã được tạo!" });
      })
      .catch(() => {
        return res.json({
          success: false,
          message: "Có lỗi xảy ra, vui lòng thử lại sau!",
        });
      });
  };
}

module.exports = new UserController();
