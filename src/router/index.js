import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import {GetUserRoutersApi} from '@/request/api'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainlayout',
    // 异步组件加载：组件的懒加载写法
    component:()=>import(/* webpackChunkName:"mainlayout" */'../views/layout/MainLayout.vue')
  },
  {
    path:'/about',
    name: 'about',
    component:()=>import('../views/AboutView.vue')
  },
  {
    path:'/login',
    name: 'login',
    component:()=>import('../views/login/Login.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

// 全局路由守卫
router.beforeEach(async(to, from, next) => {
  const token =  localStorage.getItem("eQAQ-authorization-token")
  // 管理系统常见的两个经典逻辑
  // 1.如果用户访问登录页面，但是token已存在，则应跳转到首页
  if(to.path === "/login" && token){
    next("/");
    return
  }
  // 2.如果用户访问登录页以外的页面，但是token不存在，则应跳转到登录页
  if(to.path !== "/login" && !token){
    next("/login");
    return
  }

  if(token && store.state.userMenuData.menuData.length == 0){
    
    let GetUserRoutersApiRes = await GetUserRoutersApi()
    console.log("用户菜单数据GetUserRoutersApiRes为:",GetUserRoutersApiRes); 
    
    // 请求到的GetUserRoutersApiRes和需要的menuData结构不一样，所以需要通过GetUserRoutersApiRes生成menuData
    let newUserMenuData = [{title:"首页",path:"/"}];
    let ret = GetUserRoutersApiRes.data.map(item=>{
      if(item.children){
        return{
          title:item.meta.title,
          path:item.path,
          children:item.children.map(sitem=>{
            return{
              title:sitem.meta.title,
              path:item.path+"/"+sitem.path
            }
          }),
        }
      }else{
        return{
          title:item.meta.title,
          path:item.path,
        }
      }
    })
    newUserMenuData = [...newUserMenuData,...ret];
    // 更新动态菜单数据到vuex
    // store.commit("文件夹名称/方法名", 要传的参数)
    store.commit("userMenuData/changeMenuData",newUserMenuData)

    console.log(newUserMenuData);
  }

  next()
})

export default router