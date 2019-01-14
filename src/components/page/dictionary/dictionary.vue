<template>
    <div>
        <div class="search"><el-input v-model="inputVal" placeholder="请输入要查询的生字"></el-input><el-button type="primary" @click="getData()">确定</el-button></div>
        <div v-if="inputVal">
            <div class="zi">字：{{ zi }}</div>
            <div class="py">拼音：{{ py }}</div>
            <div class="wb">五笔：{{ wb }}</div>
            <div class="bh" v-for="(item, index) in this.jijie" :key="index"> {{ item }} </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                inputVal: '',
                zi: '',
                py: '',
                wb: '',
                jijie: []
            }
        },
        mounted () {
            // this.getData()
        },
        methods: {
            getData(){
                const params = {
                    url:'xhzd/query',
                    data:{
                        key: '7191598141cab3f613acd7adad7ab81f',
                        word: this.inputVal,
                        dtype: 'json',
                    }
                }
                this.api.get(params,res=>{
                    console.log(res)
                    this.zi = res.zi;
                    this.py = res.py;
                    this.wb = res.wubi;
                    this.jijie = res.jijie;
                })
            }
        }
    }
</script>
<style>

</style>

