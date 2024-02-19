import { $fetch } from 'ofetch';
import ClientInterceptors from '@/api/client.interceptors.api';
import MovieService from '@/services/movie/movie.service';

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

if (!baseApiUrl) {
  throw new Error('VITE_BASE_API_URL not found in env file');
}

const clientFetch = $fetch.create({
  baseURL: baseApiUrl,
  ...ClientInterceptors,
});

const movieService: MovieService = new MovieService(clientFetch);

export { movieService };
