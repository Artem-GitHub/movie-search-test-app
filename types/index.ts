import type {
  $Fetch,
  InterceptorOptionsType,
  ApiOptionsType,
  ApiSearchParametersType,
  InterceptorsInterface,
  ApiInterface,
} from '@/api/types';

import type { ResponseListType } from '@/services/types';

import type { ConfigurationDetailsResponseType } from '@/services/configuration/types';

import type {
  MovieDetailsResponseType,
  MoviePopularResponseItemType,
  MoviePopularResponseType,
} from '@/services/movie/types';

import type {
  TrendingAllResponseType,
  TrendingMovieResponseType,
  TrendingSeriesResponseType,
  TrendingPersonResponseType,
} from '@/services/trending/types';

import type { LinksListType } from '@/components/the-header/types';

import { TrendingPeriodEnum } from '@/services/trending/types';

export type {
  $Fetch,
  InterceptorOptionsType,
  ApiOptionsType,
  ApiSearchParametersType,
  InterceptorsInterface,
  ApiInterface,
  ResponseListType,
  ConfigurationDetailsResponseType,
  MovieDetailsResponseType,
  MoviePopularResponseItemType,
  MoviePopularResponseType,
  TrendingAllResponseType,
  TrendingMovieResponseType,
  TrendingSeriesResponseType,
  TrendingPersonResponseType,
  LinksListType,
};

export { TrendingPeriodEnum };
