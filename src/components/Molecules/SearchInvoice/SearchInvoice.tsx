import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import RHFTextField from '../../Atoms/RHFTextField';
import { fieldOptions } from './fieldOptions';

type TSearchInvoiceProps = {
  onSearch: ({ keyword }: { keyword: string }) => void;
};

export const SearchInvoice: React.FC<TSearchInvoiceProps> = ({ onSearch }) => {
  const defaultValues = {
    keyword: '',
  };

  const methods = useForm({
    defaultValues: defaultValues,
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (formValues: { keyword: string }) => {
    onSearch(formValues);
  };

  const handleClose = () => {
    onSearch({ keyword: '' });
    reset();
  };

  return (
    <Stack>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Search
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack flexWrap="nowrap" direction="row" alignItems="center" gap={2}>
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
                Search
              </Button>
              <Button
                variant="outlined"
                onClick={handleClose}
                color="secondary"
              >
                Clear
              </Button>
            </Stack>
          </Stack>
        </form>
      </FormProvider>
    </Stack>
  );
};
