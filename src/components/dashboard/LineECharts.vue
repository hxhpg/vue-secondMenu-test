<template>
  <div id="myChart" ref="line" :style="{width: 'auto', height: '400px'}"></div>
</template>

<script>
import echarts from 'echarts';
import { on, off } from '@/utils/tools'
export default {
  name:'LineECharts',
  props: {
    value: Array,
    change: Object,
    text: String,
    subtext: String
  },
  data(){
    return{
      line: null,
    }
  },
  watch: {
    value: {
      handler: function (newVal, oldVal) {
        if (newVal) {
          this.initChart()
        }
      }
    }
  },
  
  methods:{
    resize () {
      this.line.resize()
    },
    drawLine(){
      // 获取当前日期
      var myDate = new Date();
      var nowTime = myDate.toLocaleDateString().split('/').join('-');
      console.log('***',nowTime);
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'));
      // 绘制图表
      myChart.setOption({
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['邮件营销', '视频广告', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '视频广告',
                type: 'line',
                stack: '总量',
                data: [356, 332, 301, 254, 290, 430, 510]
            },
            {
                name: '搜索引擎',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
      });
    }
  },
  mounted(){
    this.drawLine();
  },
  beforeDestroy () {
    off(window, 'resize', this.resize);
  }
}
</script>
