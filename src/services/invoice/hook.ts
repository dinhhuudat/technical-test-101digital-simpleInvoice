import useSWR from 'swr';
import { TInvoicesReq } from '../../types/request';
import request from '../../utils/axios';
import { isEmpty } from 'lodash';

enum Epath {
  INVOICE = 'invoice-service',
}

export const useInvoices = ({
  orgId,
  query,
}: {
  orgId: string | undefined;
  query?: Partial<TInvoicesReq>;
}) => {
  const apiVersion = '1.0.0';
  const endpoint = `${process.env.REACT_APP_API_URL}${Epath.INVOICE}/${apiVersion}/invoices?pageNum=${query?.pageNum}&sortBy=${query?.sortBy}&ordering=${query?.ordering}&keyword=${query?.keyword}`;

  const { data, mutate, isLoading } = useSWR(endpoint, url =>
    isEmpty(orgId) ? null : request(url, { headers: { 'org-token': orgId } }),
  );

  return {
    data: data?.data,
    pageNumber: data?.paging?.pageNumber || 0,
    pageSize: data?.paging?.pageSize || 0,
    totalRecords: data?.paging?.totalRecords || 0,
    mutate,
    isLoading,
  };
};
