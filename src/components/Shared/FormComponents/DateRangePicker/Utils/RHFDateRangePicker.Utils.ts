import type { NullableDateType } from '../Types/RHFDateRangePicker.Types';

export const formattedDateRange = (startDate: NullableDateType, endDate: NullableDateType) => {
  return startDate && endDate ? `${startDate.toLocaleDateString()}  - ${endDate.toLocaleDateString()} ` : '';
};
