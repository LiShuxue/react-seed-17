import axios from './axios';

// define every api
const getApi = { type: 'get', url: '/test/get' };
const postApi = { type: 'post', url: '/test/post' };

// export those api as default module, because we alwasy need use those in other place
const api = {
  getApi,
  postApi,
};

export default api;

// export those method, then we can use it in bisuness logic
export const testGetMethod = () => {
  return axios({
    method: getApi.type,
    url: getApi.url,
  });
};

export const testPostMethod = (data) => {
  return axios({
    method: postApi.type,
    url: postApi.url,
    data,
  });
};
