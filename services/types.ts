export type UrlsType = {
  readonly [key: string]: string;
};

export type ResponseListType<M> = {
  page: number;
  results: [M];
  total_pages: number;
  total_results: number;
};
