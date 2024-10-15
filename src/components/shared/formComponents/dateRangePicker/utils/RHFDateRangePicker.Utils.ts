/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import type { NullableDateType } from '../types/RHFDateRangePicker.Types';

const formatDate = (date: NullableDateType): string => {
  if (!date) return '';

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formattedDateRange = (startDate: NullableDateType, endDate: NullableDateType) => {
  if (startDate || endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }

  return '';
};
