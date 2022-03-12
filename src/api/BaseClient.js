import axios from 'axios';

const baseUrl = 'https://taling.projectlion.lkaybob.pe.kr/api';

class BaseClient {
  #ACCESS_TOKEN = '';

  #CLIENT_ID = 'web-app';

  #CLIENT_SECRET = 'abcd1234';

  #instance = undefined;

  constructor() {
    this.#instance = axios.create({
      baseURL: baseUrl,
    });
  }

  getBasicAuth() {
    const SOURCE_STRING = `${this.#CLIENT_ID}:${this.#CLIENT_SECRET}`;
    return btoa(SOURCE_STRING);
  }

  get instance() {
    this.#instance.defaults.headers.authorization = this.#ACCESS_TOKEN !== '' ? `Bearer ${this.#ACCESS_TOKEN}` : `Basic ${this.getBasicAuth()}`;
    return this.#instance;
  }

  set ACCESS_TOKEN(accessToken) {
    this.#ACCESS_TOKEN = accessToken;
  }
}

export default BaseClient;
