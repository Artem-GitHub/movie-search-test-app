import type {
  $Fetch,
  ApiOptionsType,
  ApiInterface,
} from '@/types';

export default class BaseApi implements ApiInterface {
  private fetchApi: $Fetch;

  constructor (fetchApi: $Fetch) {
    this.fetchApi = fetchApi;
  };

  public get<M> (url: string = '', options: ApiOptionsType = {}): Promise<M> {
    return this.fetchApi(url, { method: 'GET', ...options });
  };
};
