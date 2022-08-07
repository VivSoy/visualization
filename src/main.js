import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入适配
import 'lib-flexible/flexible'
// 初始化全局样式
import 'normalize.css'
import './assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
