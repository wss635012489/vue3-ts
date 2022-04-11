import axios,{AxiosResponse} from "axios";
import { Toast } from 'vant';

axios.defaults.baseURL = 'http://localhost:9000';

//响应拦截
axios.interceptors.response.use(function (response:AxiosResponse) {
  //console.log(response)
  return response.data.data
}, function (error) {
  Toast('服务器错误')
  return Promise.reject(error);
});

export function getList(){
  return axios.request({
   url:`/list`,
   method:'get',
 })
}