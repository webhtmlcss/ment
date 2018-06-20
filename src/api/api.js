import axios from 'axios'
import config from './config'
const base = '/api/'   // 更改的base
// http request 拦截器
axios.interceptors.request.use(
  config => {
      // config.headers.developToken = '000006';
      // config.headers.tokenPassword = '1qaz2wsx';
      return config;
  },
  err => {
      return Promise.reject(err);
});

class API {
  post(params, callback, errcallback) {
    config.data = params.data||{}
    return axios.post(`${base}${params.url}`, config.data, config).then(res =>{
      let rst = res.data
      if (rst.error_code === 0) {
        callback && callback(rst && rst.result || {})
      }else{
        console.log(rst.reason)
        errcallback && errcallback(rst.reason||{})
      }
    }
  ).catch(e => {
      console.log(e)
    })
  }
  get (params, callback, errcallback) {
    console.log(222)
    config.data = params.data||{}
    return axios.get(`${base}${params.url}`, { params: config.data }, config).then(res => {
      let rst = res.data
      if (rst.error_code === 0) {
        callback && callback(rst && rst.result ||{})
      }else{
        console.log(rst.reason)
        errcallback && errcallback(rst.reason||{})
      }
    }).catch(e => {
      console.log(e)
    })
  }
}
const api = new API()

export default api
