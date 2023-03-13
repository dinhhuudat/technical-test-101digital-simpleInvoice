import request from '../../utils/axios';

enum Epath {
  INVOICE = 'invoice-service',
}

const onlogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const endpoint = `${process.env.HOST}${Epath.INVOICE}/token?tenantDomain=${process.env.tenantDomain}`;
  const body = {
    client_id: process.env.client_id,
    client_secret: process.env.client_secret,
    grant_type: 'password',
    scope: 'openid',
    email,
    password,
  };
  const reponse = await request(endpoint, { method: 'POST', data: body });
  console.log(reponse);
};
