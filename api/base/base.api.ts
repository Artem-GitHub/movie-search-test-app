import type {
  ApiOptionsType,
  PromiseApiResponseType,
} from '@/types';

export default abstract class BaseApi {
  constructor (
    protected interceptors: unknown,
    protected options: ApiOptionsType
  ) {};

  public abstract get<M> (endpoint: string, options: ApiOptionsType): PromiseApiResponseType<M>;
};
