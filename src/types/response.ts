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

type TMembership = {
  membershipId: string;
  organisationId: string;
  roleName: string;
  token: string;
};

export type TInvoiceRes = {
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

export type TProfileRes = {
  email: string;
  firstName: string;
  lastName: string;
  memberships: TMembership[];
  userId: string;
  userName: string;
};

export type TTransfomData<T> = {
  data: T;
};
