import { TCreateInvoiceReq } from '../../types/request';
import request from '../../utils/axios';

enum Epath {
  INVOICE = 'invoice-service',
}

export const onCreateInvoice = async (payload: TCreateInvoiceReq) => {
  const apiVersion = '2.0.0';
  const body = [{ ...payload }];
  const endpoint = `${process.env.HOST}${Epath.INVOICE}/${apiVersion}/invoices`;
  return await request(endpoint, { method: 'POST', data: body });
};
