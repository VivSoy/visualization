<template>
  <div class="homeContainer">
    <!-- 头部标题 -->
    <my-header></my-header>
    <!-- 可视区域内容 -->
    <div class="visibleContent">
      <!-- 左侧 -->
      <div class="left">
        <l-bar-chart></l-bar-chart>
        <l-line-chart></l-line-chart>
        <l-pie-chart></l-pie-chart>
      </div>
      <!-- 中间 -->
      <div class="middle">
        <middle-number></middle-number>
      </div>
      <!-- 右侧 -->
      <div class="right">
        <r-bar-chart></r-bar-chart>
        <r-line-chart></r-line-chart>
        <r-pie-chart></r-pie-chart>
      </div>
    </div>
  </div>
</template>

<script>
// 头部标题
import MyHeader from '../components/MyHeader.vue'
// 左侧图形
import LBarChart from './Left/LBarChart.vue'
import LLineChart from './Left/LLineChart.vue'
import LPieChart from './Left/LPieChart.vue'
// 右侧图形
import RBarChart from './Right/RBarChart.vue'
import RLineChart from './Right/RLineChart.vue'
import RPieChart from './Right/RPieChart.vue'
// 中部图形
import MiddleNumber from './Middle/MiddleNumber.vue'
export default {
  components: {
    MyHeader,
    LBarChart,
    LLineChart,
    LPieChart,
    RBarChart,
    RLineChart,
    RPieChart,
    MiddleNumber
  }

}
</script>

<style lang="less" scoped>
.visibleContent{
  display: flex;
  min-width: 12.8rem;
  max-width: 24rem;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  .left{
    flex: 3;
  }
  .middle{
    flex: 5;
    margin: 0 .125rem .1875rem;
  }
  .right{
    flex: 3;
  }
}
</style>
