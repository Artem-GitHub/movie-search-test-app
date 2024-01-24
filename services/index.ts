import FetchApi from '@/api/fetch.api';
import ClientInterceptors from '@/api/client.interceptors.api';
import urls from '@/services/urls';
import MovieService from '@/services/movie/movie.service';

const movieService: MovieService = new MovieService(
  new FetchApi(
    ClientInterceptors,
    { baseURL: urls.movie },
  )
);

export { movieService };
