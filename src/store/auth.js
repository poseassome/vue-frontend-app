export default {
  namespaced: true,
  state: {
    accessToken: '',
  },
  getters: {
    getAccessToken: (state) => state.accessToken,
  },
  mutations: {
    setAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
  },
  actions: {
    setAccessToken: async ({ commit }, accessToken) => {
      commit('setAccessToken', accessToken);
    },
  },
};
