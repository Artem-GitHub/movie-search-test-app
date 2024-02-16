import type {
  ApiResponseType,
  MoviePopularResponseType,
} from '@/types';
import { movieServerService } from '@/server/services';

export default defineEventHandler(async (): Promise<MoviePopularResponseType | undefined> => {
  const response: ApiResponseType<MoviePopularResponseType> = await movieServerService.getMoviePopular();
  return response._data;
});
