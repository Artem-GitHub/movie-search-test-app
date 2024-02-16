import FetchApi from '@/api/fetch.api';
import ServerInterceptors from '@/api/server.interceptors.api';
import urls from '@/server/services/urls';
import MovieServerService from '@/server/services/movie/movie.service';

const movieServerService: MovieServerService = new MovieServerService(
  new FetchApi(
    ServerInterceptors,
    { baseURL: urls.movie }
  )
);

export { movieServerService };
