import useSWR from 'swr';
import { TProfileRes, TTransfomData } from '../../types/response';
import request from '../../utils/axios';

enum Epath {
  MEMBERSHIP = 'membership-service',
}

export const useProfile = () => {
  const apiVersion = '1.2.0';
  const endpoint = `${process.env.REACT_APP_API_URL}${Epath.MEMBERSHIP}/${apiVersion}/users/me`;

  const { data, isLoading, mutate } = useSWR<TTransfomData<TProfileRes>>(
    endpoint,
    request,
  );

  const orgId: string = data?.data?.memberships[0]?.token || '';

  return {
    orgId,
    data: data?.data,
    isLoading,
    isError: !data || typeof data === 'string',
    mutate,
  };
};
