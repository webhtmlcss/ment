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
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
           return {
               jgObj:[
                   {name:'111',age:11,ah: 'k歌111',eat:['披萨111','削面111','肉夹馍111']},
                   {name:'222',age:12,ah: 'k歌222',eat:['披萨222','削面222','肉夹馍222']},
                   {name:'333',age:13,ah: 'k歌333',eat:['披萨333','削面333','肉夹馍333']}
               ]
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
</style>