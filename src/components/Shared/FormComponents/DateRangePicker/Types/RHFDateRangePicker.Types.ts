export interface IWithTimeProps {
  startTimeName: string;
  endTimeName: string;
}

export interface DateRange {
  startDate: Date;
  endDate: Date | null;
}

export interface IRHFDateRangePickerProps {
  name: string;
  label?: string;
  withTime: {
    startTimeName: string;
    endTimeName: string;
  };
}

export interface IDateRangePickerCustomInputProps {
  value: string;
  label?: string;
  errorMessages: string[];
  onClear: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
}

export type NullableDateType = Date | null;
export type OptionalDateType = Date | undefined;
export type FormatDateRangeType = (startValue: OptionalDateType, endValue: OptionalDateType) => string;
export type HandleDateChangeType = (
  dates: OptionalDateType | null | [OptionalDateType | null, OptionalDateType | null]
) => void;
