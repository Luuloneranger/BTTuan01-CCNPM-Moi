const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models/index");

let handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.User.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.roleId,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN },
      );

      let redirectUrl =
        user.roleId === "ADMIN" ? "/admin/profile" : "/user/profile";

      return res.status(200).json({
        message: "Đăng nhập thành công",
        token,
        redirectUrl,
      });
    }
    return res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Lỗi server" });
  }
};

module.exports = {
  handleLogin,
};
