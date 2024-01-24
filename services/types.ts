import BaseService from '@/services/base/base.service';

export interface ServicesInterface {
  [key: string]: BaseService;
};

export type UrlsType = {
  [key: string]: string;
};

export type ResponseListType<M> = {
  page: number;
  results: [M];
  total_pages: number;
  total_results: number;
};
