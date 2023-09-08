<template>
  <div class="navbar" :class="{isColl:isCollapse}">
    <!-- 
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true" 控制是否只保持一个子菜单的展开
     -->
     <h1 class="main-logo">
      <img src="../../assets/images/logo.png" alt="" width="32px">
      <span v-show="!isCollapse">通用后台管理系统</span>
     </h1>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#054722"
      :collapse="isCollapse"
      :unique-opened="true"
      :collapse-transition="false"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      
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
      left: 62px;
      top: 16px;
    }
  }
}
</style>