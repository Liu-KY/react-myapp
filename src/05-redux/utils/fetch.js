import axios from "axios";

const baseURL = "https://m.maizuo.com";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {},
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.headers['X-Client-Info'] = '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    if (response.data && response.status === 200) {
      return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
