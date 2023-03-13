import useSWR from 'swr';
import request from '../../utils/axios';

enum Epath {
  MEMBERSHIP = 'membership-service',
}

export const useProfile = () => {
  const apiVersion = '1.2.0';
  const endpoint = `${process.env.HOST}${Epath.MEMBERSHIP}/${apiVersion}/users/me`;
  return useSWR(endpoint, request);
};
