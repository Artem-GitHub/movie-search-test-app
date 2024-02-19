import { $fetch } from 'ofetch';
import ServerInterceptors from '@/api/server.interceptors.api';
import MovieServerService from '@/server/services/movie/movie.service';

const config = useRuntimeConfig();
const externalApiUrl = config.public.VITE_EXTERNAL_API_URL;

if (!externalApiUrl) {
  throw new Error('VITE_EXTERNAL_API_URL not found in env file');
}

const serverFetch = $fetch.create({
  baseURL: externalApiUrl,
  ...ServerInterceptors,
});

const movieServerService: MovieServerService = new MovieServerService(serverFetch);

export { movieServerService };
