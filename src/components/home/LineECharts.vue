<template>
  <div id="LineECharts" :style="{ width: 'auto', height: '400px' }"></div>
</template>

<script>
export default {
  name: 'LineECharts', // 折线图
  data(){
    return {

    }
  },
  methods: {
    drawLine(){
      // 获取当前日期
      // let nowTime = new Date().toLocaleDateString().split('/').join('-');
      // 基于准备好的dom，初始化echarts实例
      let myChartOne = this.$echarts.init(document.getElementById('LineECharts'));
      // 绘制图表
      myChartOne.setOption({
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
      window.onresize = () => {  // 根据窗口大小变化图表自适应
        myChartOne.resize();
      };
    }
  },
  mounted() {
    this.drawLine();
  }
}
</script>
