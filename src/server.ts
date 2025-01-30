import { createServer } from "http"; // Mengimpor createServer dari http module
import app from "./app.js"; // Mengimpor app yang sudah didefinisikan

const PORT = 5000;

// Membuat server HTTP menggunakan Elysia.fetch
createServer(app.fetch).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});
