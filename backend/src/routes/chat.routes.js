import { Router } from "express";
import { chatStreamHandler } from "../controllers/chat.controller.js";

const router = Router();
router.post("/chat/stream", chatStreamHandler);
export default router;