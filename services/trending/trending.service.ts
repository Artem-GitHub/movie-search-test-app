import BaseApi from '@/api/base.api';
import { TrendingPeriodEnum } from '@/types';

import type {
  TrendingAllResponseType,
  TrendingMovieResponseType,
  TrendingSeriesResponseType,
  TrendingPersonResponseType,
  ApiSearchParametersType,
} from '@/types';

export default class TrendingService extends BaseApi {
  private resourseUrl = '/trending';

  public getTrendingAll (
    period: TrendingPeriodEnum = TrendingPeriodEnum.day,
    query: ApiSearchParametersType = {}
  ): Promise<TrendingAllResponseType> {
    return this.get<TrendingAllResponseType>(this.resourseUrl + `/all/${period}`, { query });
  };

  public getTrendingMovie (
    period: TrendingPeriodEnum = TrendingPeriodEnum.day,
    query: ApiSearchParametersType = {}
  ): Promise<TrendingMovieResponseType> {
    return this.get<TrendingMovieResponseType>(this.resourseUrl + `/movie/${period}`, { query });
  };

  public getTrendingSeries (
    period: TrendingPeriodEnum = TrendingPeriodEnum.day,
    query: ApiSearchParametersType = {}
  ): Promise<TrendingSeriesResponseType> {
    return this.get<TrendingSeriesResponseType>(this.resourseUrl + `/tv/${period}`, { query });
  };

  public getTrendingPerson (
    period: TrendingPeriodEnum = TrendingPeriodEnum.day,
    query: ApiSearchParametersType = {}
  ): Promise<TrendingPersonResponseType> {
    return this.get<TrendingPersonResponseType>(this.resourseUrl + `/person/${period}`, { query });
  };
};
