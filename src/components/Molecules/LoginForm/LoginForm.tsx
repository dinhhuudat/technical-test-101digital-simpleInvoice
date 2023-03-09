import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import RHFTextField from "../../Atoms/RHFTextField";
import { fieldOptions, schemaForm } from "./fieldOptions";

type TCustomModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const LoginForm: React.FC<TCustomModalProps> = ({
  isOpen,
  handleClose,
}) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemaForm),
  });

  const onSubmit = (formValues: { email: string; password: string }) => {
    const value = JSON.stringify(formValues);
    window.alert(value);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack>
            {(
              Object.keys(fieldOptions) as Array<keyof typeof fieldOptions>
            ).map((fieldName) => {
              const { label, ...restOptions } = fieldOptions[fieldName];
              return (
                <RHFTextField
                  key={fieldName}
                  label={label}
                  name={fieldName}
                  {...restOptions}
                />
              );
            })}
            <Button variant="outlined" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </FormProvider>
    </div>
  );
};
