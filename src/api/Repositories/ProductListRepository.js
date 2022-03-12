import BaseClient from '@/api/BaseClient';

export default class {
  constructor(client = undefined) {
    this.client = client || new BaseClient();
  }

  async getProductList() {
    const path = '/product';
    const response = await this.client.instance.get(path);
    return response.data;
  }

  async getProductInfo(productNo) {
    const path = `/product/${productNo}`;
    const response = await this.client.instance.get(path);

    return response.data;
  }
}
