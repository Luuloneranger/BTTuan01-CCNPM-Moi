# BTTuan01-CCNPM-Moi

Một ứng dụng Node.js cơ bản để quản lý người dùng với Express.js, Sequelize ORM, và MySQL.

## Mô tả

Dự án này là một ứng dụng web backend xây dựng với Node.js giúp thực hiện các thao tác CRUD (Create, Read, Update, Delete) cơ bản cho quản lý người dùng. Ứng dụng sử dụng Sequelize ORM để tương tác với cơ sở dữ liệu MySQL.

## Cài đặt

1. Clone repository:

```bash
git clone https://github.com/Luuloneranger/BTTuan01-CCNPM-Moi.git
cd BTTuan01-CCNPM-Moi
```

2. Cài đặt dependencies:

```bash
npm install
```

3. Tạo file `.env` trong thư mục gốc:

```
PORT=8088
NODE_ENV=development
```

4. Cấu hình kết nối MySQL trong file `src/config/config.json`

5. Chạy migration để tạo bảng:

```bash
npx sequelize-cli db:migrate
```

## Chạy ứng dụng

Chạy ứng dụng ở chế độ development:

```bash
npm start
```

Ứng dụng sẽ chạy trên `http://localhost:8088`

## Cấu trúc thư mục

```
BTTuan01-CCNPM-Moi/
├── src/
│   ├── config/           # Cấu hình ứng dụng
│   │   ├── config.json   # Cấu hình database
│   │   ├── configdb.js   # Kết nối database
│   │   └── viewEngine.js # Cấu hình view engine
│   ├── controller/       # Controllers xử lý logic
│   │   └── homeController.js
│   ├── models/           # Sequelize models
│   │   ├── index.js
│   │   └── user.js
│   ├── route/            # Định tuyến
│   │   └── web.js
│   ├── services/         # Business logic
│   │   └── CRUDService.js
│   ├── views/            # EJS templates
│   │   ├── crud.ejs
│   │   └── users/
│   │       ├── findAllUser.ejs
│   │       └── updateUser.ejs
│   ├── migrations/       # Database migrations
│   ├── seeders/          # Database seeders
│   └── server.js         # Entry point
├── .env                  # Biến môi trường
├── .sequelizerc           # Cấu hình Sequelize
├── package.json          # Dependencies
└── README.md
```

## API Endpoints

| Phương thức | Endpoint            | Mô tả                    |
| ----------- | ------------------- | ------------------------ |
| GET         | `/`                 | Trang chủ                |
| GET         | `/get-crud`         | Lấy danh sách người dùng |
| GET         | `/edit-crud?id=X`   | Hiển thị form chỉnh sửa  |
| POST        | `/put-crud`         | Cập nhật người dùng      |
| GET         | `/delete-crud?id=X` | Xóa người dùng           |

## Tác giả

Trình Văn Lưu

## License

ISC
