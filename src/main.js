import Vue from 'vue'
// 清除默认样式的插件，建议写在最前面以便于清除所有样式
import 'reset-css' 

import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/icons/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
