import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入适配
import 'lib-flexible/flexible'
// 初始化全局样式
import 'normalize.css'
import './assets/css/reset.css'

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from 'echarts/charts'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  BarChart,
  CanvasRenderer
])

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
