import Client from '@/api/AxiosClient';

const resource = '/product';

export default {
  getProduct() {
    return Client.get(`${resource}`);
  },
};
