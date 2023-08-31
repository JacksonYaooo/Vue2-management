<template>
  <div class="layout">
    <NavBar />
    <div class="layout-right">
      <HeadView />
      <ContentView />
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import HeadView from "./HeadView.vue";
import ContentView from "./ContentView.vue";

export default {
  components:{NavBar, HeadView, ContentView}
};
</script>

<style>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
}
.layout-right{
  flex: 1;
}
</style>
