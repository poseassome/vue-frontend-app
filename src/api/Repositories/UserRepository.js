import Client from '@/api/AxiosClient';

const resource = '/info';

export default {
  get() {
    return Client.get(`${resource}`);
  },
};
