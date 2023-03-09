import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomModal from "../../Atoms/CustomModal";
import RHFTextField from "../../Atoms/RHFTextField";
import { fieldOptions, schemaForm } from "./fieldOptions";

type TSignInFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignInForm: React.FC<TSignInFormProps> = ({ isOpen, onClose }) => {
  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemaForm),
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (formValues: { email: string; password: string }) => {
    const value = JSON.stringify(formValues);
    window.alert(value);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <CustomModal handleClose={handleClose} title="Sign In" isOpen={isOpen}>
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
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="outlined"
                type="submit"
                disabled={isSubmitting}
                color="primary"
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                onClick={handleClose}
                color="secondary"
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </FormProvider>
    </CustomModal>
  );
};
