export const waitFor = (num: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, num));
};
