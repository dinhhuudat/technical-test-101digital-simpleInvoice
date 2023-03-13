import request from '../../utils/axios';

export const onlogin = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const endpoint = `${process.env.REACT_APP_API_URL}token?tenantDomain=${process.env.REACT_APP_TENANT_DOMAIN}`;
  const body = {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    grant_type: 'password',
    scope: 'openid',
    username: email,
    password,
  };

  return request(endpoint, {
    method: 'POST',
    data: body,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
};
