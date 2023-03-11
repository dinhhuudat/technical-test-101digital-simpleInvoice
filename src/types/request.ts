export type TInvoicesReq = {
    pageNum: number;
    pageSize: number;
    dataType: "INVOICE_DATE";
    sortBy: "CREATED_DATE";
    ordering: "ASCENDING";
  };