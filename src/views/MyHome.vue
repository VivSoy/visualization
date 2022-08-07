<template>
  <div class="homeContainer">
    <my-header></my-header>
    <!-- 可视区域内容 -->
    <div class="visibleContent">

      <!-- 左侧 -->
      <div class="left"></div>
      <!-- 中间 -->
      <div class="middle"></div>
      <!-- 右侧 -->
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import MyHeader from '../components/MyHeader.vue'
export default {
  components: { MyHeader },
  comments: {
    MyHeader
  }
}
</script>

<style lang="less" scoped>
.homeContainer{
  background: url('../assets/images/bg.jpg');
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
</style>
