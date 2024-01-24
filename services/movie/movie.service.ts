import BaseService from '@/services/base/base.service';
import type {
  PromiseApiResponseType,
  MoviePopularResponseType,
  ApiSearchParametersType,
} from '@/types';

export default class MovieService extends BaseService {
  public getMoviePopular (query: ApiSearchParametersType = {}): PromiseApiResponseType<MoviePopularResponseType> {
    return this.api.get<MoviePopularResponseType>('/popular', query);
  };
};
