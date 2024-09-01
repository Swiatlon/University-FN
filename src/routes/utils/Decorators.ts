export const beautifyNumbers = (number: number): string => {
  return new Intl.NumberFormat().format(number);
};
