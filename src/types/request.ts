export type TInvoicesReq = {
  pageNum: number;
  pageSize: number;
  dataType: 'INVOICE_DATE';
  sortBy: 'CREATED_DATE';
  ordering: 'ASCENDING';
};

export type TInvoiceItem = {
  id: string;
  itemReference: string;
  description: string;
  quantity: number;
  rate: number;
  itemName: string;
  itemUOM: string;
};

export type TCreateInvoiceReq = {
  currency: string;
  invoiceDate: string;
  dueDate: string;
  description: string;
  items: TInvoiceItem[];
};
