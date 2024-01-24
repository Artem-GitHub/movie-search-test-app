import BaseApi from '@/api/base/base.api';
import { $fetch } from 'ofetch';
import type {
  $Fetch,
  ApiOptionsType,
  PromiseApiResponseType,
  InterceptorsInterface,
} from '@/types';

export default class FetchApi extends BaseApi {
  protected fetchApi: $Fetch;

  constructor (
    protected interceptors: InterceptorsInterface,
    protected options: ApiOptionsType = {},
  ) {
    super(interceptors, options);
    this.fetchApi = $fetch.create({
      ...this.interceptors,
      ...this.options,
    });
  };

  public get <M>(endpoint: string = '', options: ApiOptionsType = {}): PromiseApiResponseType<M> {
    return this.fetchApi.raw(endpoint, { method: 'GET', ...options });
  };
};
