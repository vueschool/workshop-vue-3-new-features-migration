export const wait = (milleseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milleseconds));
};
