import type { Range, RangeKeyDict, DateRangeProps } from 'react-date-range';
import { useState, useEffect, useRef } from 'react';
import { differenceInDays } from 'date-fns';
import { Stack } from '@mui/material';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './styles.scss';

type DateRangePickerProps = DateRangeProps & {
  resetTrigger?: string | boolean | number; // triggers the calendar to reset;
  minDate?: Date;
  maxDate?: Date;
  startDate?: Date;
  endDate?: Date;
  maxDays?: number;
  handleRangeChange?: (range: Range) => void;
};
const DateRangePicker = ({
  startDate = new Date(),
  endDate = new Date(),
  minDate = new Date(),
  maxDate,
  maxDays,
  handleRangeChange,
  startDatePlaceholder,
  endDatePlaceholder,
  resetTrigger,
}: DateRangePickerProps) => {
  const mounted = useRef(false);
  const [range, setRange] = useState<Range>({
    startDate: new Date(startDate),
    endDate: new Date(endDate),
    disabled: maxDays === 0,
    showDateDisplay: true,
    key: 'selection',
  });

  useEffect(() => {
    if (mounted.current) {
      setRange(r => ({ ...r, startDate: new Date(), endDate: new Date() }));
    }
    mounted.current = true;
  }, [resetTrigger]);

  const handleDateChange = (value: RangeKeyDict) => {
    let newRange = value.selection;
    const { startDate, endDate } = newRange;
    if (maxDays && startDate && endDate) {
      const daysDiff = differenceInDays(startDate, endDate);
      const maxDaysExceeded = Math.abs(daysDiff) >= maxDays;
      newRange = maxDaysExceeded ? range : value.selection;
    }
    if (handleRangeChange)
      handleRangeChange({ startDate: newRange.startDate, endDate: newRange.endDate });
    setRange(newRange);
  };

  return (
    <Stack direction="row" justifyContent="center">
      <DateRange
        startDatePlaceholder={startDatePlaceholder}
        endDatePlaceholder={endDatePlaceholder}
        className="dateRangePicker"
        minDate={minDate}
        maxDate={maxDate}
        ranges={[range]}
        onChange={handleDateChange}
      />
    </Stack>
  );
};

export default DateRangePicker;
