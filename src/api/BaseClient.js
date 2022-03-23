import axios from 'axios';

const baseUrl = 'https://taling.projectlion.lkaybob.pe.kr/api';

class BaseClient {
  // #ACCESS_TOKEN = '';
  #STORE = undefined;

  #CLIENT_ID = 'web-app';

  #CLIENT_SECRET = 'abcd1234';

  #instance = undefined;

  constructor(store) {
    this.#STORE = store;
    this.#instance = axios.create({
      baseURL: baseUrl,
    });
  }

  getBasicAuth() {
    const SOURCE_STRING = `${this.#CLIENT_ID}:${this.#CLIENT_SECRET}`;
    return btoa(SOURCE_STRING);
  }

  get instance() {
    // this.#instance.defaults.headers.authorization = this.#ACCESS_TOKEN !==
    // '' ? `Bearer ${this.#ACCESS_TOKEN}` : `Basic ${this.getBasicAuth()}`;
    this.#instance.defaults.headers.authorization = this.#STORE.state.auth.accessToken !== '' ? `Bearer ${this.#STORE.state.auth.accessToken}` : `Basic ${this.getBasicAuth()}`;
    return this.#instance;
  }

  set ACCESS_TOKEN(accessToken) {
    // this.#ACCESS_TOKEN = accessToken;
    this.#STORE.dispatch('auth/setAccessToken', accessToken);
  }
}

export default BaseClient;
