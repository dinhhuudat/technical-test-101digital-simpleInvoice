import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('dev_token');
    if (token) {
      const tokenJson = JSON.parse(token);
      if (tokenJson) {
        config.headers = {
          Authorization: `Bearer ${tokenJson.access_token}`,
          ...config.headers,
        };
      }
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const request = async (url: string, options: AxiosRequestConfig = {}) => {
  try {
    const res: AxiosResponse = await axios({
      method: 'GET',
      url,
      baseURL: process.env.API_URL,
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    return res.data;
  } catch (err) {
    const { response } = err as AxiosError;
    if (!(response && response.status)) throw err;
    if (!(response.data instanceof Blob)) return response.data;
  }
};

export default request;
