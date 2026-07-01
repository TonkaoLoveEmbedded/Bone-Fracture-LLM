// middleware ตัวสุดท้าย — log ภายในจริง แต่ไม่ leak detail ออก response
export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: "INTERNAL_ERROR" });
}