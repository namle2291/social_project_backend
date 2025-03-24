const messageModel = require("../models/messageModel");

class MessageController {
  async send(req, res) {
    const { sender_id, receiver_id, content } = req.body;

    await messageModel
      .create({ sender_id, receiver_id, content })
      .then(() => {
        return res.json({ success: true, message: "Đã gửi!" });
      })
      .catch(() => {
        return res.json({
          success: false,
          message: "Có lỗi xảy ra, vui lòng thử lại sau!",
        });
      });
  }
}

module.exports = new MessageController();
