import useSWR from 'swr';
import { TInvoicesReq } from '../../types/request';
import request from '../../utils/axios';

enum Epath {
  INVOICE = 'invoice-service',
}

export const useInvoices = (payload: TInvoicesReq) => {
  const apiVersion = '1.0.0';
  const endpoint = `${process.env.REACT_APP_API_URL}${Epath.INVOICE}/${apiVersion}/invoices`;
  return useSWR(endpoint, url => request(url, { params: payload }));
};
