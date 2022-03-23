import { createStore } from 'vuex';
import cartModule from './shoppingcart';
import authModule from './auth';

export default createStore({
  modules: {
    cart: cartModule,
    auth: authModule,
  },
});
