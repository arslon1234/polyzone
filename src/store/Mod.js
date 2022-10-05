import {API_MOD_INDEX, API_MOD_SHOW} from "@/api/Mod";

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
    action_index({commit}, size = 10, page = 1) {
      return API_MOD_INDEX(size, page, 'time')
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
    action_index_rating({commit}, size = 10, page = 1) {
      return API_MOD_INDEX(size, page, 'rating')
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
    action_show({commit}, id) {
      return API_MOD_SHOW(id)
        .then(response => {
          if (response.status === 200) {
            commit('setListById', {id, data: response.data.data})
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
    setListById(state, {id, data}) {
      state.listById[id] = data;
    }
  }
}
