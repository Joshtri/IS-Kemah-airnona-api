# Sistem Informasi Gereja Nayo API

## Deskripsi Proyek
Sistem Informasi Gereja Nayo adalah sebuah API yang dirancang untuk mengelola data dan informasi terkait kegiatan gereja. API ini menyediakan berbagai endpoint untuk mengelola data jemaat, kegiatan, dan informasi lainnya yang relevan dengan operasional gereja.

## Tech Stack
Proyek ini dibangun menggunakan teknologi-teknologi berikut:

- **Node.js**: Platform JavaScript untuk pengembangan server-side.
- **Express.js**: Framework web untuk Node.js yang digunakan untuk membangun API.
- **MongoDB**: Database NoSQL yang digunakan untuk menyimpan data.
<!-- - **Mongoose**: ODM (Object Data Modeling) library untuk MongoDB dan Node.js. -->
- **JWT (JSON Web Token)**: Digunakan untuk otentikasi dan otorisasi.
<!-- - **Docker**: Digunakan untuk containerization aplikasi. -->
<!-- - **Swagger**: Digunakan untuk dokumentasi API. -->
- **bcryptjs**: Library untuk hashing password.
- **cors**: Middleware untuk mengaktifkan CORS (Cross-Origin Resource Sharing).
- **dotenv**: Library untuk mengelola environment variables.
<!-- - **swagger-ui-express**: Middleware untuk menyajikan dokumentasi API menggunakan Swagger UI. -->
- **@elysiajs/cors**: Middleware untuk mengaktifkan CORS.
- **@prisma/client**: Prisma Client untuk interaksi dengan database.
- **elysia**: Framework web untuk Node.js.
<!-- - **figlet**: Library untuk membuat teks ASCII art. -->
- **prisma**: ORM untuk database.
- **zod**: Library untuk validasi skema.

## Cara Menjalankan Proyek
1. Clone repository ini:
    ```bash
    git clone <repository-url>
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd sistemInformasiGerejaNayo-api
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Konfigurasi environment variables sesuai dengan file `.env.example`.
5. Jalankan aplikasi:
    ```bash
    npm start
    ```

## Dokumentasi API
Dokumentasi lengkap API dapat diakses melalui endpoint `/api-docs` setelah aplikasi dijalankan.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan buat pull request dengan perubahan yang Anda usulkan.

## Lisensi
Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Dependencies

Berikut adalah daftar dependencies yang digunakan dalam proyek ini sesuai dengan `package.json`:

- **bcryptjs**: Library untuk hashing password.
<!-- - **body-parser**: Middleware untuk parsing body request. -->
- **cors**: Middleware untuk mengaktifkan CORS (Cross-Origin Resource Sharing).
- **dotenv**: Library untuk mengelola environment variables.
- **express**: Framework web untuk Node.js.
- **jsonwebtoken**: Library untuk membuat dan memverifikasi JSON Web Tokens.
<!-- - **mongoose**: ODM (Object Data Modeling) library untuk MongoDB dan Node.js. -->
<!-- - **morgan**: HTTP request logger middleware untuk Node.js. -->
<!-- - **swagger-ui-express**: Middleware untuk menyajikan dokumentasi API menggunakan Swagger UI. -->
- **@elysiajs/cors**: Middleware untuk mengaktifkan CORS.
- **@prisma/client**: Prisma Client untuk interaksi dengan database.
- **elysia**: Framework web untuk Node.js.
<!-- - **figlet**: Library untuk membuat teks ASCII art. -->
- **prisma**: ORM untuk database.
- **zod**: Library untuk validasi skema.

## Dev Dependencies

Berikut adalah daftar dev dependencies yang digunakan dalam proyek ini sesuai dengan `package.json`:

- **chai**: Library assertion untuk Node.js dan browser.
- **mocha**: Framework untuk pengujian JavaScript.
- **nodemon**: Tool yang membantu mengembangkan aplikasi berbasis Node.js dengan me-restart aplikasi secara otomatis ketika file berubah.
- **supertest**: Library untuk menguji HTTP.
- **@types/bun**: Type definitions untuk Bun.
- **@types/figlet**: Type definitions untuk Figlet.

## Peer Dependencies

Berikut adalah daftar peer dependencies yang digunakan dalam proyek ini sesuai dengan `package.json`:

- **typescript**: Superset JavaScript yang menambahkan tipe statis.