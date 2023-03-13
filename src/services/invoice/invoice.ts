import { TCreateInvoiceReq } from '../../types/request';
import request from '../../utils/axios';

enum Epath {
  INVOICE = 'invoice-service',
}

export const onCreateInvoice = ({
  orgId,
  payload,
}: {
  orgId: string | undefined;
  payload: TCreateInvoiceReq;
}) => {
  const apiVersion = '2.0.0';
  const body = JSON.stringify({ invoices: [payload] });
  const endpoint = `${process.env.REACT_APP_API_URL}${Epath.INVOICE}/${apiVersion}/invoices`;
  return request(endpoint, {
    method: 'POST',
    data: body,
    headers: { 'Content-Type': 'application/json', 'org-token': orgId },
  });
};
