<template>
	<div id="main" style="width: 400px; height: 300px;">

	</div>
</template>

<style lang="scss">
	//此处省略
</style>

<script>
	import * as echarts from 'echarts'
	export default {
		data: function() {
			return {
				option: {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]

				}
			}
		},
		mounted: function() {
			var myChart = echarts.init(document.getElementById('main'));
			myChart.setOption(this.option);
		}
	}
</script>