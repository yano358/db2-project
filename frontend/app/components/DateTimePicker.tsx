import * as React from "react";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface DatePickerProps {
  label: string;
  selectedDate: Dayjs | null;
  onChange: (selectedDate: Dayjs | null) => void;
}

const today = dayjs();

const BasicDateTimePicker: React.FC<DatePickerProps> = ({
  label,
  selectedDate,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <DateTimePicker
          disablePast
          views={["year", "month", "day", "hours", "minutes"]}
          label={label}
          value={selectedDate}
          onChange={onChange}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default BasicDateTimePicker;
