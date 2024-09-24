export const getDailyAdvice = async () => {
  const res = await fetch("#");
  return res.json();
};
