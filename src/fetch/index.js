// 创建axios实例
import axios from 'axios'

let $axios = axios.create()

console.log($axios)

// 添加请求拦截器
$axios.interceptors.request.use(function (config) {
  console.log(fig)
}, function (error) {
  console.log(error)
})

export default $axios
