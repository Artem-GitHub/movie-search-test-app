import { trendingServerService } from '@/server/services';
import { TrendingPeriodEnum } from '@/types';
import type { TrendingSeriesResponseType } from '@/types';

export default defineEventHandler(async (event): Promise<TrendingSeriesResponseType | undefined> => {
  const period = getRouterParam(event, 'period') as TrendingPeriodEnum;

  return await trendingServerService.getSeries(period);
});
