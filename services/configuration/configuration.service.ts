import BaseApi from '@/api/base.api';

import type { ConfigurationDetailsResponseType } from '@/types';

export default class ConfigurationService extends BaseApi {
  private resourseUrl = '/configuration';

  public getDetails (): Promise<ConfigurationDetailsResponseType> {
    return this.get<ConfigurationDetailsResponseType>(this.resourseUrl);
  };
};
