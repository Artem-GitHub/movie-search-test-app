import BaseApi from '@/api/base.api';
import type {
  MoviePopularResponseType,
  ApiSearchParametersType,
} from '@/types';

export default class MovieService extends BaseApi {
  private RESOURCE = '/movie';

  public getMoviePopular (query: ApiSearchParametersType = {}): Promise<MoviePopularResponseType> {
    return this.get<MoviePopularResponseType>(this.RESOURCE + '/popular', query);
  };
};
