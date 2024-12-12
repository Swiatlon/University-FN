export const beautifyNumbers = (number: number): string => {
  return new Intl.NumberFormat().format(number);
};

export const calculatePercentage = (count: number, amountOfAllElements: number): string => {
  if (amountOfAllElements === 0) {
    return '0%';
  }

  return `${Math.round((count / amountOfAllElements) * 100)}%`;
};
