import { API_USER_INDEX, API_USER_SHOW } from "@/api/User";

export default {
  namespaced: true,
  state: {
    list: [],
    topRatingList: [],
    listById: {}
  },
  getters: {
    list(state) {
      return state.list;
    },
    topRatingList(state) {
      return state.topRatingList;
    },
    listById(state) {
      return state.listById;
    }
  },
  actions: {
    action_index({ commit }, size = 10, page = 1) {
      API_USER_INDEX(size, page, 'time')
        .then(response => {
          if (response.status === 200) {
            commit('setList', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_rating({ commit }, size = 10, page = 1) {
      API_USER_INDEX(size, page, 'rating')
        .then(response => {
          if (response.status === 200) {
            commit('setTopRatingList', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    },
    action_index_show({ commit }, id) {
      return API_USER_SHOW(id)
        .then(response => {
          if (response.status === 200) {
            commit('setlistById', { id, data: response.data.data })
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    }
  },
  mutations: {
    setList(state, data) {
      state.list = data;
    },
    setTopRatingList(state, data) {
      state.topRatingList = data;
    },
    setlistById(state, { id, data }) {
      state.listById[id] = data;
    }
  }
}
