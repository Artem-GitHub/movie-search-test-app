import { configurationServerService } from '@/server/services';
import type { ConfigurationDetailsResponseType } from '@/types';

export default defineEventHandler(async (): Promise<ConfigurationDetailsResponseType | undefined> => {
  return await configurationServerService.getDetails();
});
