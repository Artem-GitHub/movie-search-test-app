import type {
  $Fetch,
  FetchContext,
  FetchOptions,
  SearchParameters,
} from 'ofetch';

type InterceptorOptionsType = FetchContext;
type ApiOptionsType = FetchOptions;
type ApiSearchParametersType = SearchParameters;

interface InterceptorsInterface {
  onRequest (options?: InterceptorOptionsType): void | Promise<void>;
  onRequestError (options?: InterceptorOptionsType): void | Promise<void>;
  onResponse (options?: InterceptorOptionsType): void | Promise<void>;
  onResponseError (options?: InterceptorOptionsType): void | Promise<void>;
};

interface ApiInterface {
  get<M> (url: string, options: ApiOptionsType): Promise<M>;
}

export type {
  $Fetch,
  InterceptorOptionsType,
  ApiOptionsType,
  ApiSearchParametersType,
  InterceptorsInterface,
  ApiInterface,
};
