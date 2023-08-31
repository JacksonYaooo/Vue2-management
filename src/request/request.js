import axios from "axios"
import { Message } from 'element-ui'


const instance =  axios.create({
  baseURL:"http://xue.cnkdl.cn:23683",
  timeout:10000,
});

// 请求拦截器
instance.interceptors.request.use(config =>{
  return config
},err=>{
  return Promise.reject(err)
});

// 响应拦截器
instance.interceptors.response.use(res =>{
  // 在这里已经能拿到res.data去判断code是否为200
  let res_data = res.data

  if(res_data.code != 200){
    // 直接把错误提示抽取过来，避免登录页代码块重复书写
    // 这里把vue写法的this.$message改成js函数Message，上方引入函数
    // 增加一个字符串防止没有msg时出现空白的情况
    Message.error(res_data.msg || '网络请求失败')
    return false
  }

  return res_data
},err=>{
  return Promise.reject(err)
});

export default instance