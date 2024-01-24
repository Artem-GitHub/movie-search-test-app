import type {
  $Fetch,
  FetchContext,
  FetchOptions,
  FetchResponse,
  SearchParameters,
} from 'ofetch';

type InterceptorOptionsType = FetchContext;
type ApiOptionsType = FetchOptions;
type ApiResponseType<M> = FetchResponse<M>;
type PromiseApiResponseType<M> = Promise<ApiResponseType<M>>;
type ApiSearchParametersType = SearchParameters;

interface InterceptorsInterface {
  onRequest (options?: InterceptorOptionsType): void | Promise<void>;
  onRequestError (options?: InterceptorOptionsType): void | Promise<void>;
  onResponse (options?: InterceptorOptionsType): void | Promise<void>;
  onResponseError (options?: InterceptorOptionsType): void | Promise<void>;
};

export type {
  $Fetch,
  InterceptorOptionsType,
  ApiOptionsType,
  ApiResponseType,
  PromiseApiResponseType,
  ApiSearchParametersType,
  InterceptorsInterface,
};
