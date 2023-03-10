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

type TCreateInvoiceField = {
  currency: "GBP" | "VND";
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
    currency: "GBP",
    description: "",
    invoiceDate: dayjs(new Date().toLocaleDateString()),
    dueDate: dayjs(new Date().toLocaleDateString()),
    item: "item1",
  };

  const methods = useForm({
    defaultValues: defaultValues,
    resolver: zodResolver(schemaForm),
  });

  const {
    reset,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = (formValues: TCreateInvoiceField) => {
    const value = JSON.stringify(formValues);
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
          <Stack gap={2}>
            {(
              Object.keys(fieldOptions) as Array<keyof typeof fieldOptions>
            ).map((fieldName) => {
              const { type, label, ...restOptions } = fieldOptions[fieldName];

              switch (type) {
                case "textfield": {
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
                case "datetime": {
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
