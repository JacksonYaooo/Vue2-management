<template>
  <div class="navbar" :class="{isColl:isCollapse}">
    <!-- 
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true" 控制是否只保持一个子菜单的展开
      default-active="2" 默认初识时菜单2展开
     -->
     <h1 class="main-logo">
      <img src="../../assets/images/logo.png" alt="" width="32px">
      <span v-show="!isCollapse">通用后台管理系统</span>
     </h1>
    <el-menu
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#054722"
      :collapse="isCollapse"
      :unique-opened="true"
      :collapse-transition="false"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="item,idx in menuData" :key="idx">
        <el-submenu :index="item.path" v-if="item.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item :index="sitem.path" v-for="sitem,sidx in item.children" :key="sidx">{{ sitem.title }}</el-menu-item>
        </el-submenu>

        <el-menu-item :index="item.path" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      menuData:[
        {
          title:"首页",
          path:"/",
        },
        {
          title:"客户管理",
          path:"/customer",
          children:[
            {title:"客户档案",path:"/customer/customer",},
            {title:"拜访记录",path:"/customer/visit",},
          ],
        },
        {
          title:"修养预约",
          path:"/business",
          children:[
            {title:"预约信息",path:"/business/appointment",},
            {title:"服务项",path:"/business/service",},
            {title:"结算单",path:"/business/statement",},
          ],
        },
        {
          title:"流程管理",
          path:"/flow",
          children:[
            {title:"审核流程定义",path:"/flow/definition",},
          ]
        }
      ],
    }
  },
  computed:{
    ...mapState({
      isCollapse:state=>state.navCollapse.isCollapse,
    })
  }
}
</script>

<style lang="less" scoped>
.navbar{
  width: 220px;
  height: 100%;
  background-color: #054722;
  box-shadow: 6px 0 5px #8b8b8b85;
  // 相对定位既能提升层级又不改变元素位置
  position: relative;
  .el-menu {
    border: none;
  }
  // & 同时拥有navbar类和isColl类的标签，继承父级
  &.isColl{
    width: 64px;
  }
  img{
    vertical-align: middle;
  }
  .main-logo{
    padding: 10px 16px;
    position: relative;
    span{
      min-width: 130px;
      color: #fff;
      font-weight: bold;
      display: inline-block;
      position: absolute;
      left: 60px;
      top: 16px;
    }
  }
}

// 解决添加div后的样式显示bug
.isColl .el-submenu__title span, ::v-deep .el-menu--collapse .el-submenu__title .el-submenu__icon-arrow{
  display: none;
}
</style>