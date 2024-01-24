import type { InterceptorsInterface } from '@/types';

const ClientInterceptors: InterceptorsInterface = {
  onRequest () {},
  onRequestError () {},
  onResponse () {},
  onResponseError () {},
};

export default ClientInterceptors;
