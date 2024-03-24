import { trendingServerService } from '@/server/services';
import { TrendingPeriodEnum } from '@/types';
import type { TrendingAllResponseType } from '@/types';

export default defineEventHandler(async (event): Promise<TrendingAllResponseType | undefined> => {
  const period = getRouterParam(event, 'period') as TrendingPeriodEnum;

  return await trendingServerService.getAll(period);
});
