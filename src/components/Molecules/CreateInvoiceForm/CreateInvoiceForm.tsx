import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomModal from "../../Atoms/CustomModal";
import RHFDateTime from "../../Atoms/RHFDateTime";
import RHFTextField from "../../Atoms/RHFTextField";
import { fieldOptions, schemaForm } from "./fieldOptions";

type TCreateInvoiceFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type TInvoiceItem = {
  itemReference: string;
  description: string;
  quantity: number;
  rate: number;
  itemName: string;
  itemUOM: "KG";
};

type TCreateInvoiceField = {
  currency: "GBP" | "VND";
  invoiceDate: dayjs.Dayjs;
  description: string;
  items: TInvoiceItem[];
};

export const CreateInvoiceForm: React.FC<TCreateInvoiceFormProps> = ({
  isOpen = false,
  onClose,
}) => {
  const defaultValues: TCreateInvoiceField = {
    currency: "GBP",
    description: "",
    invoiceDate: dayjs(new Date().toLocaleDateString()),
    items: [
      {
        itemReference: "itemRef",
        description: "Honda RC150",
        quantity: 1,
        rate: 1000,
        itemName: "Honda Motor",
        itemUOM: "KG",
      },
    ],
  };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemaForm),
  });

  const {
    reset,
    formState: { isSubmitting, errors },
    getValues,
  } = methods;
  console.log(1, errors);
  const onSubmit = (formValues: TCreateInvoiceField) => {
    const value = JSON.stringify(getValues());
    window.alert(value);
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
          <Stack>
            <RHFDateTime name="invoiceDate" />

            {/* {(
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
            })} */}

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
