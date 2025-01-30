import { Elysia } from "elysia";
import app from "./app.js";

const server = new Elysia().use(app);

// Start the server using listen for local development
server.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});