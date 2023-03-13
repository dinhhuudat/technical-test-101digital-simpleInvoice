import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack } from '@mui/material';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { onlogin } from '../../../services/users/users';
import CustomModal from '../../Atoms/CustomModal';
import RHFTextField from '../../Atoms/RHFTextField';
import { fieldOptions, schemaForm } from './fieldOptions';

type TSignInFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SignInForm: React.FC<TSignInFormProps> = ({ isOpen, onClose }) => {
  const defaultValues = {
    email: 'dung+octopus4@101digital.io',
    password: 'Abc@123456',
  };

  const [errors, setErros] = useState<string[]>([]);

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemaForm),
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (formValues: { email: string; password: string }) => {
    const response = await onlogin(formValues);
    if (response.error_description) {
      return setErros([response.error_description]);
    }
    //login success
    localStorage.setItem('dev_token', JSON.stringify(response));
    onClose();
    setErros([]);
  };

  const handleClose = () => {
    reset();
    onClose();
    setErros([]);
  };

  return (
    <CustomModal handleClose={handleClose} title="Sign In" isOpen={isOpen}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack gap={2}>
            {errors.map(err => (
              <Box
                key={err}
                sx={{ border: 'solid red 2px', p: 1, borderRadius: '8px' }}
              >
                <Box sx={{ width: '100%' }} color="red">
                  {err}
                </Box>
              </Box>
            ))}
            {(
              Object.keys(fieldOptions) as Array<keyof typeof fieldOptions>
            ).map(fieldName => {
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
