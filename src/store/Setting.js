import {API_SETTING_INDEX} from "@/api/Setting";

export default {
  namespaced: true,
  state: {
    list: {
      header: {
        mod: null
      }
    }
  },
  getters: {
    list(state){
      return state.list;
    }
  },
  actions: {
    action_index({commit}) {
      API_SETTING_INDEX()
        .then(response => {
          if(response.status === 200){
            commit('setList', response.data.data)
          }
          return response;
        })
        .catch(error => {
          console.log(error.response)
        });
    }
  },
  mutations: {
    setList(state, data){
      let list = {};
      data.forEach(item => {
        list[item.title] = item.data;
      })
      state.list = list;
    }
  }
}
