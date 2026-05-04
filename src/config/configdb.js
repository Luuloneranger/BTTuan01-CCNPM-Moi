const { Sequelize } = require("sequelize");

// Khởi tạo kết nối với database
const sequelize = new Sequelize("bt01_node_js", "root", "Luuluyen@123", {
  host: "localhost",
  dialect: "mysql", // hoặc 'mssql' tùy DB bạn dùng
  logging: false,
});

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// QUAN TRỌNG: Phải có dòng này để server.js có thể import được
export default connectDB;
