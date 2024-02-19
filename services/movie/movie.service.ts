import BaseApi from '@/api/base.api';
import type {
  MoviePopularResponseType,
  ApiSearchParametersType,
} from '@/types';

export default class MovieService extends BaseApi {
  private resourseUrl = '/movie';

  public getMoviePopular (query: ApiSearchParametersType = {}): Promise<MoviePopularResponseType> {
    return this.get<MoviePopularResponseType>(this.resourseUrl + '/popular', query);
  };
};
