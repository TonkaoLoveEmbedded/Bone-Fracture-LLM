import { streamChat } from "../services/llm.service.js";

export async function chatStreamHandler(req, res) {
  const { messages, groundingContext } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "INVALID_MESSAGES" });
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();

  // abort เมื่อ client ปิด tab / กดยกเลิก
  const controller = new AbortController();
  req.on("close", () => controller.abort());

  try {
    for await (const token of streamChat({
      messages,
      groundingContext,
      signal: controller.signal,
    })) {
      res.write(`data: ${JSON.stringify({ token })}\n\n`);
    }
    res.write("data: [DONE]\n\n");
  } catch (err) {
    if (err.name !== "AbortError") {
      console.error("LLM stream error:", err);
      res.write(`data: ${JSON.stringify({ error: "LLM_ERROR" })}\n\n`);
    }
  } finally {
    res.end();
  }
}