import CartApi from '@/api/Repositories/ShoppingCartRepository';

export default {
  namespaced: true,
  state: {
    cart: [],
    isInitialized: false,
  },
  getters: {
    getCartItem: (state) => state.cart,
    getTotalPrice: (state) => state.cart.reduce((prevSum, currentProduct) => {
      const productPrice = currentProduct.product.price;
      const { quantity } = currentProduct;
      const optionLength = currentProduct.options.length;
      let finalBilledOptionPrice = 0;

      for (let i = 0; i < optionLength; i += 1) {
        const optionQuantity = currentProduct.options[i].quantity;
        const { baseQuantity, unitprice } = currentProduct.optionsInfo[i];

        finalBilledOptionPrice += unitprice * (optionQuantity - baseQuantity);
      }

      return prevSum + (productPrice + finalBilledOptionPrice) * quantity;
    }, 0),
    getTotalCount: (state) => state.cart.length,
    getFirstProductName: (state) => {
      if (state.cart.length > 0) {
        return state.cart[0].product.nameKr;
      }
      return '';
    },
  },
  mutations: {
    addCartItem: (state, newProduct) => {
      const prevState = state.cart;

      Array.prototype.push.apply(prevState, newProduct);
      state.cart = prevState;
    },
    initCartItem: (state, cartItems) => {
      state.cart = cartItems;
    },
    initCartStore: (state) => {
      state.isInitialized = true;
    },
  },
  actions: {
    addCartItem: async ({ commit }, payload) => {
      const apiClient = new CartApi(payload.baseClient);
      await apiClient.addCart(payload.orderInfo);

      commit('addCartItem', payload.orderInfo);
    },
    initCartItem: async ({ commit }, baseClient) => {
      const apiClient = new CartApi(baseClient);
      const response = await apiClient.getCartList();

      commit('initCartItem', response.cart);
      commit('initCartStore');
    },
  },
};
