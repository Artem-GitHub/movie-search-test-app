import BaseApi from '@/api/base.api';
import { TrendingPeriodEnum } from '@/types';

import type {
  TrendingAllResponseType,
  TrendingMovieResponseType,
  TrendingSeriesResponseType,
  TrendingPersonResponseType,
} from '@/types';

export default class TrendingService extends BaseApi {
  private resourseUrl = '/trending';

  public getAll (period: TrendingPeriodEnum = TrendingPeriodEnum.day): Promise<TrendingAllResponseType> {
    return this.get<TrendingAllResponseType>(this.resourseUrl + `/all/${period}`);
  };

  public getMovie (period: TrendingPeriodEnum = TrendingPeriodEnum.day): Promise<TrendingMovieResponseType> {
    return this.get<TrendingMovieResponseType>(this.resourseUrl + `/movie/${period}`);
  };

  public getSeries (period: TrendingPeriodEnum = TrendingPeriodEnum.day): Promise<TrendingSeriesResponseType> {
    return this.get<TrendingSeriesResponseType>(this.resourseUrl + `/tv/${period}`);
  };

  public getPerson (period: TrendingPeriodEnum = TrendingPeriodEnum.day): Promise<TrendingPersonResponseType> {
    return this.get<TrendingPersonResponseType>(this.resourseUrl + `/person/${period}`);
  };
};
