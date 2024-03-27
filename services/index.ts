import { $fetch } from 'ofetch';
import ClientInterceptors from '@/api/client.interceptors.api';
import ConfigurationService from '@/services/configuration/configuration.service';
import MovieService from '@/services/movie/movie.service';
import TrendingService from '@/services/trending/trending.service';

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

if (!baseApiUrl) {
  throw new Error('VITE_BASE_API_URL not found in env file');
}

const clientFetch = $fetch.create({
  baseURL: baseApiUrl,
  ...ClientInterceptors,
});

const configurationService: ConfigurationService = new ConfigurationService(clientFetch);
const movieService: MovieService = new MovieService(clientFetch);
const trendingService: TrendingService = new TrendingService(clientFetch);

export {
  configurationService,
  movieService,
  trendingService,
};
