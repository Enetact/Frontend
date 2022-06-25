import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack } from '@mui/material';

export default function DateRangePicker() {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack direction={'row'} justifyContent={'space-between'} spacing={1}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={newValue => {
            setStartDate(newValue);
          }}
          renderInput={params => <TextField fullWidth {...params} />}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={newValue => {
            setEndDate(newValue);
          }}
          renderInput={params => <TextField fullWidth {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
