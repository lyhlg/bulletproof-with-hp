import Axios, { InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
}

export const api = Axios.create({
  baseURL: 'https://test.gnsister.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'c0c3832e41674caa8c7e68edd1cef7a1'
  },
});

api.interceptors.request.use(authRequestInterceptor);
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// if the endpoint requires the visiting user to be authenticated,
// attaching cookies is required for requests made on the server side
export const attachCookie = (
  cookie?: string,
  headers?: Record<string, string>,
) => {
  return {
    headers: {
      ...headers,
      ...(cookie ? { Cookie: cookie } : {}),
    },
  };
};