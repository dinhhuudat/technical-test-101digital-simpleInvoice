export type TInvoiceSort =
  | 'CURRENTCY'
  | 'INVOICE_NUMBER'
  | 'CREATED_DATE'
  | 'DESCRIPTION'
  | 'INVOICE_DATE';

export type TInvoicesReq = {
  pageNum: number;
  pageSize: number;
  dataType: 'INVOICE_DATE';
  sortBy: TInvoiceSort;
  ordering: 'ASCENDING' | 'DESCENDING';
  keyword: string;
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
