import { configurationService } from '@/services';
import type { ConfigurationDetailsResponseType } from '@/types';

export const useConfigurationStore = defineStore('configuration', {
  state: () => ({
    details: {} as ConfigurationDetailsResponseType,
  }),

  actions: {
    async getDetails (): Promise<void> {
      this.details = await configurationService.getDetails();
    },
  },
});
