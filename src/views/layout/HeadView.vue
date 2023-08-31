<template>
  <div class="header">
    <el-button icon="el-icon-s-unfold" v-show="!isShow" @click="changeShow"></el-button>
    <el-button icon="el-icon-s-fold" v-show="isShow" @click="changeShow"></el-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
data(){
  return {
    isShow:true,
  }
},
methods:{
  ...mapMutations({
    changeIsCollapse:'navCollapse/changeIsCollapse'
  }),
  changeShow(){
    this.isShow = !this.isShow
    this.changeIsCollapse()
  }
}
}
</script>

<style lang="less" scoped>
.header{
  height: 84px;
  box-shadow: 0 5px 5px #8b8b8b85;
  // padding-left: 20px;
  button{
    height: 50px;
    width: 50px;
    margin: 0;
    font-size: 24px;
    padding: 12px 10px;
    border: none;
  }
}
</style>