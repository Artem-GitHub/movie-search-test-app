import { $fetch } from 'ofetch';
import ServerInterceptors from '@/api/server.interceptors.api';
import ConfigurationServerService from '@/server/services/configuration/configuration.service';
import MovieServerService from '@/server/services/movie/movie.service';
import TrendingServerService from '@/server/services/trending/trending.service';

const config = useRuntimeConfig();
const externalApiUrl = config.public.VITE_EXTERNAL_API_URL;

if (!externalApiUrl) {
  throw new Error('VITE_EXTERNAL_API_URL not found in env file');
}

const serverFetch = $fetch.create({
  baseURL: externalApiUrl,
  ...ServerInterceptors,
});

const configurationServerService: ConfigurationServerService = new ConfigurationServerService(serverFetch);
const movieServerService: MovieServerService = new MovieServerService(serverFetch);
const trendingServerService: TrendingServerService = new TrendingServerService(serverFetch);

export {
  configurationServerService,
  movieServerService,
  trendingServerService,
};
