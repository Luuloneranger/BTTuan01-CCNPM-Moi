const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Bạn đã thử quá nhiều lần đăng nhập. Vui lòng thử lại sau 15 phút.",
});

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Không có quyền truy cập" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token không hợp lệ" });
  }
};

const checkRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: "Bạn không có quyền truy cập" });
    }
    next();
  };
};

module.exports = {
  loginLimiter,
  verifyToken,
  checkRole,
};
