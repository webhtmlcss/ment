<template>
    <div class="vuePage">
       <el-table :data="jgObj">
           <el-table-column label="姓名">
                <template slot-scope="scope">
                    {{scope.row.mingzi}}
                </template>
            </el-table-column>
           <el-table-column label="爱吃个啥">
                <template slot-scope="scope">
                    <!-- <span v-for="i in scope.row.chide">
                        {{i}}
                    </span> -->
                    {{scope.row.chide.join('，')}}
                </template>
            </el-table-column>
       </el-table>
       <sonCompent :data="data"></sonCompent>
    </div>
</template>

<script>
    //import *** from "组件路径";
    import sonCompent from './sonCompent'
    // 解构赋值
    export default {
        data () {
           return {
               jgObj:[
                   {name:'111',age:11,ah: 'k歌111',eat:['披萨111','削面111','肉夹馍111']},
                   {name:'222',age:12,ah: 'k歌222',eat:['披萨222','削面222','肉夹馍222']},
                   {name:'333',age:13,ah: 'k歌333',eat:['披萨333','削面333','肉夹馍333']}
               ],
               jgObj1:[
                   {name:'444',age:11,ah: 'k歌111',eat:['披萨111','削面111','肉夹馍111']},
                   {name:'555',age:12,ah: 'k歌222',eat:['披萨222','削面222','肉夹馍222']},
                   {name:'666',age:13,ah: 'k歌333',eat:['披萨333','削面333','肉夹馍333']}
               ],
                data: {
                    content:{
                        pcContent: '123123',
                        mobileContent: 'xxxxxx'
                    },
                    abc:'我是abc',
                    def:'我是def'
                }
           }
        },
        created () {
            console.log(this.$store.state.data.list)
        },
        computed: {
           //computedFn () {
           //    return xxx
           //}
        },
        mounted () {
            this.jgObj = this.jgObj.map(v => {
                let {name:mingzi, eat:chide} = v
                return {mingzi, chide}
            })
            console.log([...this.jgObj,...this.jgObj1]); // 合并对象？
            let {
                content: {pcContent, mobileContent} = { pcContent: '', mobileContent: '' },
                abc,
                def
            } = this.data; //解构赋值？
            console.log(pcContent,'获取数据');
            console.log(mobileContent,'获取数据');
            console.log(abc,'获取数据');
            console.log(def,'获取数据');
        },
        methods: {
        },
        components: {
            sonCompent
        },
        props: {
            paramName: {
               type: Object
            }
        }
    }
</script>

<style>
</style>