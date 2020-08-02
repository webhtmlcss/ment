<template>
    <div class="vuePage">
       <el-input v-model="xx"></el-input>
    </div>
</template>

<script>
    //import *** from "组件路径";
    // 解构赋值
    export default {
        data () {
           return {
               xx: ''
           }
        },
        created () {
            console.log(this.data);
        },
        computed: {
           //computedFn () {
           //    return xxx
           //}
        },
        mounted () {
            
        },
        methods: {
        },
        components: {
        },
        props: {
            data: {
               type: Object
            }
        }
    }
</script>

<style>
</style>