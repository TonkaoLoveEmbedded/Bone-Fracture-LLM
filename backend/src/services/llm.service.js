import { LLM_CONFIG, SYSTEM_PROMPT } from "../config/llm.js";

function buildMessages(history, groundingContext) {
  const system = groundingContext
    ? `${SYSTEM_PROMPT}\n\n## บริบทผลวิเคราะห์ (ground truth — ห้ามแต่งเพิ่ม)\n${groundingContext}`
    : SYSTEM_PROMPT;
  return [{ role: "system", content: system }, ...history];
}

// async generator: yield ทีละ token
export async function* streamChat({ messages, groundingContext, signal }) {
  const res = await fetch(`${LLM_CONFIG.baseUrl}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: LLM_CONFIG.model,
      messages: buildMessages(messages, groundingContext),
      stream: true,
      options: LLM_CONFIG.options,
    }),
    signal,
  });

  if (!res.ok || !res.body) {
    throw new Error(`Ollama responded ${res.status}`);
  }

  // Ollama ส่งกลับเป็น NDJSON (1 บรรทัด = 1 JSON object)
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let nl;
    while ((nl = buffer.indexOf("\n")) !== -1) {
      const line = buffer.slice(0, nl).trim();
      buffer = buffer.slice(nl + 1);
      if (!line) continue;

      const json = JSON.parse(line);
      if (json.message?.content) yield json.message.content;
      if (json.done) return;
    }
  }
}
