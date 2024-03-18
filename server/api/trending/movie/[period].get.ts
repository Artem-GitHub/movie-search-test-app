import { trendingServerService } from '@/server/services';
import { TrendingPeriodEnum } from '@/types';
import type { TrendingMovieResponseType } from '@/types';

export default defineEventHandler(async (event): Promise<TrendingMovieResponseType | undefined> => {
  const period = getRouterParam(event, 'period') as TrendingPeriodEnum;
  const query = getQuery(event);

  return await trendingServerService.getTrendingMovie(period, query);
});
