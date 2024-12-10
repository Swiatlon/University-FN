import { useEffect, MouseEvent } from 'react';
import DatePicker from 'react-datepicker';
import { Controller, useFormContext, useWatch } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { get } from 'lodash';
import DateRangePickerCustomInput from './elements/DateRangePickerInputField';
import DateRangePickerTimeChoosingFooter from './elements/DateRangePickerTimeChoosingFooter';
import type { IRHFDateRangePickerProps, DateRange } from './types/RHFDateRangePicker.Types';
import './styles/RHFDateRangePicker.scss';

const RHFDateRangePicker = ({ name, label, withTime }: IRHFDateRangePickerProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();

  const startTime = useWatch({ name: withTime.startTimeName }) as string;
  const endTime = useWatch({ name: withTime.endTimeName }) as string;

  useEffect(() => {
    const startDate = getValues(`${name}.startDate`) as Date | null;
    const endDate = getValues(`${name}.endDate`) as Date | null;

    if (startTime) {
      const updatedStartDate = updateDateWithTime(startDate, startTime);
      setValue(`${name}.startDate`, updatedStartDate);
    }

    if (endTime) {
      const updatedEndDate = updateDateWithTime(endDate, endTime);
      setValue(`${name}.endDate`, updatedEndDate);
    }
  }, [startTime, endTime, getValues, setValue, name]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        const { startDate, endDate } = value as DateRange;

        const startDateError = get(errors, `${name}.startDate.message`) as string | undefined;
        const endDateError = get(errors, `${name}.endDate.message`) as string | undefined;

        const errorMessages = [startDateError, endDateError].filter(Boolean) as string[];

        const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          onChange({ startDate: null, endDate: null });
        };

        const handleChange = (dates: [Date | null, Date | null]) => {
          const [start, end] = dates;
          onChange({ startDate: start, endDate: end });
        };

        return (
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate ?? undefined}
            selectsRange
            monthsShown={2}
            placeholderText="Select a date range"
            withPortal
            shouldCloseOnSelect={false}
            customInput={
              <DateRangePickerCustomInput
                startDate={startDate}
                endDate={endDate}
                label={label}
                errorMessages={errorMessages}
                onClear={handleClear}
              />
            }
          >
            <DateRangePickerTimeChoosingFooter withTime={withTime} />
          </DatePicker>
        );
      }}
    />
  );
};

export default RHFDateRangePicker;

const updateDateWithTime = (date: Date | null, time: string) => {
  if (date) {
    const [hoursStr = '0', minutesStr = '0'] = time.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);

    const updatedDate = new Date(date);
    updatedDate.setHours(hours, minutes);
    return updatedDate;
  }

  return date;
};
