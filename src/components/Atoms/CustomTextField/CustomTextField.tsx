import {
  FormControl,
  MenuItem,
  TextField,
  TextFieldProps,
} from "@mui/material";
import React from "react";

export type TRHFCustomTextFieldProps = {
  options?: { value: string | number; label: string }[];
} & TextFieldProps;

export const CustomTextField: React.FC<TRHFCustomTextFieldProps> = ({
  options,
  ...otherProps
}) => {
  return (
    <FormControl>
      <TextField variant="outlined" {...otherProps}>
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};
