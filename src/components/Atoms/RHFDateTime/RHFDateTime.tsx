import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TRHFDateTime = {
  name: string;
} & Partial<Omit<React.ComponentProps<typeof DatePicker>, "views">>;

export const RHFDateTime: React.FC<TRHFDateTime> = ({ name, ...restProps }) => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...restField } }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker inputRef={ref} {...restProps} {...restField} />
            </LocalizationProvider>
          );
        }}
      />
    </>
  );
};
