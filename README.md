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
PORT=8089
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

Ứng dụng sẽ chạy trên `http://localhost:8089`



## API Endpoints

| Phương thức | Endpoint            | Mô tả                    |
| ----------- | ------------------- | ------------------------ |
| GET         | `/`                 | Trang chủ                |
| GET         | `/get-crud`         | Lấy danh sách người dùng |
| GET         | `/edit-crud?id=X`   | Hiển thị form chỉnh sửa  |
| POST        | `/put-crud`         | Cập nhật người dùng      |
| GET         | `/delete-crud?id=X` | Xóa người dùng           |
| GET         | `/login`            | đăng nhập                |

## Các bước test 
B1 : có thể gõ địa chỉ `http://localhost:8089/get-crud` để tạo một tài khoản 
B2 : Quay lại trang `http://localhost:8089/login` để đăng nhập

## Tác giả

Trình Văn Lưu

## License

ISC
