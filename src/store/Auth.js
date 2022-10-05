import { API_AUTH_LOGIN, API_AUTH_ME, API_AUTH_REGISTER } from "@/api/Auth";

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    authentication: false
  },
  getters: {
    token: (state) => {
      return state.token
    },
    authentication: (state) => {
      return state.authentication
    },
    user: (state) => {
      return state.user
    }
  },
  actions: {
    login({ commit }, { nick_name, password }) {
      return API_AUTH_LOGIN(nick_name, password)
        .then(response => {
          if (response.status === 200) {
            console.log('ath', response)
            commit('setToken', response.data.data.token)
            commit('setUser', response.data.data.user)
            commit('setAuthentication', true)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },

    me({ commit }) {
      return API_AUTH_ME()
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            commit('setUser', response.data)
            commit('setAuthentication', true)
          } else {
            commit('setAuthentication', false)
          }
          return response.data;
        })
        .catch(error => {
          commit('setAuthentication', false)
          console.log(error.response)
        });
    },

    register({ commit }, data) {
      return API_AUTH_REGISTER(data)
        .then(response => {
          if (response.status === 200) {
            console.log(response);
            commit('setToken', response.data.data.token)
            commit('setUser', response.data.data.user)
            commit('setAuthentication', true)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAuthentication(state, authentication) {
      state.authentication = authentication;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  modules: {}
}
