<template>
    <div class="vuePage">
       <el-form ref="form" :model="wechartForm" class="wechartForm" size="mini">
        <el-form-item label="营销云绑定的微信公众号：">
            <img src="../../../assets/images/bg.jpg">
            <!-- <el-avatar shape="square" :size="50" src="../../../assets/images/bg.jpg"></el-avatar> -->
            <el-link type="primary">主要链接</el-link>
        </el-form-item>
        <el-form-item label="允许哪类粉丝使用营销内容：">
            <el-checkbox-group v-model="wechartForm.checkList" @change="selectItems">
                <el-checkbox v-for="(item, idx) in wechartForm.marketInfo" :key="idx" :label="item.id">{{item.name}}</el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="未授权跳转链接：">
            <el-input v-model="wechartForm.marketUrl"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
           return {
                wechartForm:{
                    marketInfo: [
                       {name: 'aaa',id: 1},
                       {name: 'bbb',id: 2},
                       {name: 'ccc',id: 3}
                    ],
                    //选中数据 
                    checkList: [1],
                    marketUrl: 'www.baidu.com'
                },
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
        },
        methods: {
            // 保存
            onSubmit(formName){

            },
            // 多选
            selectItems(val){
                console.log(val)
            }
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
    .wechartForm{
        width: 400px;
    }
</style>