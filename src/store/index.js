import Vue from 'vue'
import Vuex from 'vuex'
import navCollapse from './navCollapse'
import userMenuData from './userMenuData'

Vue.use(Vuex)

export default new Vuex.Store({
  // state:{

  // },
  // getters:{

  // },
  // mutations:{

  // },
  // actions:{

  // },
  modules:{
    navCollapse,userMenuData
  },
})