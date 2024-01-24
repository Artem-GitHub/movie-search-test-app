import type {
  InterceptorsInterface,
  InterceptorOptionsType,
} from '@/types';

const config = useRuntimeConfig();
const secretApiToken = config.VITE_SECRET_API_TOKEN;

if (!secretApiToken) throw new Error('VITE_SECRET_API_TOKEN not found in env file');

const ServerInterceptors: InterceptorsInterface = {
  onRequest ({ options }: InterceptorOptionsType) {
    options.headers = {
      Authorization: `Bearer ${secretApiToken}`,
    };
  },
  onRequestError () {},
  onResponse () {},
  onResponseError () {},
};

export default ServerInterceptors;
