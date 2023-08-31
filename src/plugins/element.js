import Vue from 'vue'
// 引入
import { 
  Button,Form,FormItem,Input,Message,
  Menu,Submenu,MenuItemGroup,MenuItem
} from 'element-ui'

// 注册
Vue.prototype.$message = Message
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
