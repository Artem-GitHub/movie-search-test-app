import { movieServerService } from '@/server/services';
import type { MoviePopularResponseType } from '@/types';

export default defineEventHandler(async (): Promise<MoviePopularResponseType | undefined> => {
  return await movieServerService.getMoviePopular();
});
