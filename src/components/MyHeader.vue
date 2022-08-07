<template>
  <div class="headerContainer">
    <h2>数据可视化-Echarts</h2>
    <div class="data">
      当前时间: {{time.year}}年{{time.month}}月{{time.day}}日 - {{time.hour}}时{{time.minute}}分{{time.second}}秒
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  data () {
    return {
      time: {
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        second: ''
      },
      // 定时器
      timer: null
    }
  },
  methods: {
    getTime () {
      // 年
      this.time.year = dayjs().year()
      this.time.month = dayjs().month() + 1
      this.time.day = dayjs().date()
      this.time.hour = dayjs().hour()
      this.time.minute = dayjs().minute()
      this.time.second = dayjs().second()
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.getTime()
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
.headerContainer{
  position: relative;
  height: 1.25rem;
  background: url(../assets/images/head_bg.png) no-repeat ;
  background-size: 100% 100%;
  h2{
    color: #fff;
    font-size: .475rem;
    font-weight: 700;
    line-height: 1.25rem;
    text-align: center;
  }
 .data{
  position: absolute;
  right: .1875rem;
  top: 0;
  color: #fff;
  font-size: .25rem;
  line-height: 1.25rem;
 }
}
</style>
