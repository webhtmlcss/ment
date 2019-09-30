<template>
    <div class="vuePage">
       <div class="chart" id="myCharts" ref="charts"></div>
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
           return {
           }
        },
        created () {
        },
        computed: {
           //computedFn () {
           //    return xxx
           //}
        },
        mounted () {
            const myCharts = this.$echarts.init(this.$refs.charts);
            let options = {
                title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['祖','国','我','爱','你'] 
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 100, name: '祖'},
                {value: 80, name: '国'},
                {value: 60, name: '我'},
                {value: 40, name: '爱'},
                {value: 20, name: '你'}
            ]
        }
    ]}
            myCharts.setOption(options);
        },
        methods: {
        },
        components: {
        },
        props: {
            paramName: {
               type: Object
            }
        }
    }
</script>

<style>
.vuePage{
    height: 1000px;
}
.chart{
    width: 100%;
    height: 700px;
}
</style>