import type {
  ApiResponseType,
  MoviePopularResponseType,
} from '@/types';
import { movieServerService } from '@/server/services';

export default defineEventHandler(async (event): Promise<MoviePopularResponseType | undefined> => {
  try {
    const response: ApiResponseType<MoviePopularResponseType> = await movieServerService.getMoviePopular();
    return response._data;
  } catch (error) {
    throw error;
  }
});
