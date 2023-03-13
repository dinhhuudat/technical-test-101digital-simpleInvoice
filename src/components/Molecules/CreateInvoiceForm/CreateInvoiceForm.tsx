import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { onCreateInvoice } from '../../../services/invoice/invoice';
import { useProfile } from '../../../services/users/hook';
import CustomModal from '../../Atoms/CustomModal';
import RHFDateTime from '../../Atoms/RHFDateTime';
import RHFTextField from '../../Atoms/RHFTextField';
import { fieldOptions, schemaForm } from './fieldOptions';
import { mockDataItems } from './mockData';

type TCreateInvoiceFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TCreateInvoiceField = {
  currency: 'GBP' | 'VND';
  invoiceDate: dayjs.Dayjs;
  dueDate: dayjs.Dayjs;
  description: string;
  item: string;
};

export const CreateInvoiceForm: React.FC<TCreateInvoiceFormProps> = ({
  isOpen = false,
  onClose,
}) => {
  const defaultValues: TCreateInvoiceField = {
    currency: 'GBP',
    description: '',
    invoiceDate: dayjs(),
    dueDate: dayjs(),
    item: 'item1',
  };

  const [errors, setErrors] = useState<string[]>([]);

  const { data: profile } = useProfile();

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemaForm),
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (formValues: TCreateInvoiceField) => {
    const { item } = formValues;
    const itemSelected = mockDataItems.filter(i => i.id === item);
    const invoiceDate = String(
      dayjs(formValues.invoiceDate).format('YYYY-MM-DD'),
    );
    const dueDate = dayjs(formValues.dueDate).format('YYYY-MM-DD');

    const response = await onCreateInvoice({
      orgId: profile?.memberships[0]?.token,
      payload: { ...formValues, items: itemSelected, dueDate, invoiceDate },
    });

    //TODO: handle error
    if (!response) return setErrors(['Some thing wrong!']);

    onClose();
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <CustomModal
      handleClose={handleClose}
      title="Create Invoice"
      isOpen={isOpen}
    >
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
              const { type, label, ...restOptions } = fieldOptions[fieldName];

              switch (type) {
                case 'textfield': {
                  return (
                    //@ts-ignore
                    <RHFTextField
                      key={fieldName}
                      label={label}
                      name={fieldName}
                      {...restOptions}
                    />
                  );
                }
                case 'datetime': {
                  return (
                    //@ts-ignore
                    <RHFDateTime
                      key={fieldName}
                      name={fieldName}
                      label={label}
                      {...restOptions}
                    />
                  );
                }
                default: {
                  return <></>;
                }
              }
            })}

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="outlined"
                type="submit"
                disabled={isSubmitting}
                color="primary"
              >
                Create Invoice
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
