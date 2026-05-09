import express from "express";
import homeController from "../controller/homeController";
const authController = require("../controller/authController");

// SỬA DÒNG NÀY: Phải có loginLimiter bên trong dấu ngoặc nhọn
const {
  verifyToken,
  checkRole,
  loginLimiter,
} = require("../middleware/authMiddleware");

const { body, validationResult } = require("express-validator");
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getGuestPage);

  router.post(
    "/api/login",
    loginLimiter,
    body("email").isEmail().withMessage("Email không hợp lệ"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
      next();
    },
    authController.handleLogin,
  );

  router.get("/user/profile", (req, res) => res.render("users/profile.ejs"));
  router.get(
    "/api/user/profile",
    verifyToken,
    checkRole("USER"),
    homeController.getUserProfilePage,
  );
  // Trang hiện giao diện cho người dùng xem
  router.get("/admin/profile", (req, res) => res.render("admin/profile.ejs"));

  // API thực sự để lấy dữ liệu (Dùng để fetch)
  router.get(
    "/api/admin/profile",
    verifyToken,
    checkRole("ADMIN"),
    homeController.getAdminProfilePage,
  );
  router.get("/home", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.getFindAllCrud);
  router.get("/edit-crud", homeController.getEditCRUD);

  router.post("/put-crud", homeController.putCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  router.get("/login", homeController.getLoginPage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
