import Vue from 'vue'
// 引入
import { Button,Form,FormItem,Input,Message } from 'element-ui'

// 注册
Vue.prototype.$message = Message
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)