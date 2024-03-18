import { trendingServerService } from '@/server/services';
import { TrendingPeriodEnum } from '@/types';
import type { TrendingPersonResponseType } from '@/types';

export default defineEventHandler(async (event): Promise<TrendingPersonResponseType | undefined> => {
  const period = getRouterParam(event, 'period') as TrendingPeriodEnum;
  const query = getQuery(event);

  return await trendingServerService.getTrendingPerson(period, query);
});
