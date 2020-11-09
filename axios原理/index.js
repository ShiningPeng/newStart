// axios(config)
// axios.method(url,data,config)

axios.interceptors.request.use(
  (config) => {
    // 请求拦截
    return config;
  },
  (err) => {
    // 对请求错误做的事
    return Promise.reject(err);
  }
);
axios.interceptors.response.use(
  (res) => {
    // 响应拦截
    return res;
  },
  (err) => {
    // 对响应错误做的事
    return Promise.reject(err);
  }
);
