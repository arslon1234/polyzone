import {axiosAuth, axiosBase} from "@/plugins/axioses";

export const API_MOD_INDEX = async (size = 10, page = 1, sort = 'time') => {
  return await axiosBase().get('/api/mod', {params:{size, page, sort}})
    .then(response => {
      return response;
    });
}

export const API_MOD_STORE = async (data) => {
  return await axiosAuth().post('/api/mod', data)
    .then(response => {
      return response;
    });
}

export const API_MOD_SHOW = async (id) => {
  return await axiosBase().get('/api/mod/' + id)
    .then(response => {
      return response;
    });
}

export const API_MOD_UPDATE = async (id, data) => {
  return await axiosAuth().put('/api/mod/' + id, data)
    .then(response => {
      return response;
    });
}

export const API_MOD_DESTROY = async (id) => {
  return await axiosAuth().post('/api/mod/' + id)
    .then(response => {
      return response;
    });
}
