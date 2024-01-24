import BaseApi from '@/api/base/base.api';

export default abstract class BaseService {
  constructor (protected api: BaseApi) {};
};
