type TInvoiceStatus = { key: 'Overdue'; value: boolean };
type TCustomFields = {
  key: string;
  value: string;
};
type TCustomer = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  addresses: string[];
};

export type TInvoicesRes = {
  invoiceId: string;
  invoiceNumber: string;
  referenceNo: string;
  type: string;
  currency: string;
  invoiceDate: string;
  createdAt: string;
  dueDate: string;
  status: TInvoiceStatus[];
  numberOfDocuments: number;
  totalTax: number;
  totalAmount: number;
  balanceAmount: number;
  description: string;
  totalPaid: number;
  invoiceSubTotal: number;
  customFields: TCustomFields[];
  totalDiscount: number;
  customer: TCustomer;
  invoiceGrossTotal: number;
};
