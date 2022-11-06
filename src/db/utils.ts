export const getTodaySpan = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const d = now.getDate();
  const start = Date.UTC(y, m, d, 0, 0, 0, 0);
  const end = Date.UTC(y, m, d, 23, 59, 59, 999);
  return { start, end };
};
