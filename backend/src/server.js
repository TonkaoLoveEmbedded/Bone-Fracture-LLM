import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import healthRouter from "./routes/health.js";
import chatRoutes from "./routes/chat.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

// routes
app.use("/api", chatRoutes);

// error handler (ต้องอยู่ท้ายสุดเสมอ หลัง routes)
app.use(errorHandler);

const server = app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
  console.log("Environment is PORT", PORT);
});

process.on("SIGTERM", () => server.close(() => process.exit(0)));