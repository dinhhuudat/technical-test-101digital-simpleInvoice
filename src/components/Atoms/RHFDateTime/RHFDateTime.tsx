import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TRHFDateTime = {
  name: string;
} & Partial<React.ComponentProps<typeof DatePicker>>;

export const RHFDateTime: React.FC<TRHFDateTime> = ({ name, ...restProps }) => {
  const { control, setValue } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...restField } }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                inputRef={ref}
                {...restProps}
                {...restField}
                onChange={(newValue) => {
                  setValue(name, newValue);
                }}
              />
            </LocalizationProvider>
          );
        }}
      />
    </>
  );
};
