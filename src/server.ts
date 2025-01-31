/// <reference types="bun" />

import { serve } from "bun";
import app from "./app.js";

const PORT = 5000;

serve({
  port: PORT,
  fetch: app.fetch,
});

console.log(`Server running on http://localhost:${PORT} 🚀`);
