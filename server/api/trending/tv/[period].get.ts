import { trendingServerService } from '@/server/services';
import { TrendingPeriodEnum } from '@/types';
import type { TrendingSeriesResponseType } from '@/types';

export default defineEventHandler(async (event): Promise<TrendingSeriesResponseType | undefined> => {
  const period = getRouterParam(event, 'period') as TrendingPeriodEnum;
  const query = getQuery(event);

  return await trendingServerService.getTrendingSeries(period, query);
});
