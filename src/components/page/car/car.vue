<template>
    <div class="componentPage" style="padding-bottom: 100px;">
        <img src="../../../assets/images/bg.jpg" alt="">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" v-loading="isLoading">
            <el-form-item>
                <el-cascader
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange">
                </el-cascader>
                <span style="color:#F56C6C" v-show="this.selectedOptions == ''">* 请选择科目类型、驾照类型、题目类型</span>
            </el-form-item>
            <el-form-item v-for="(item,index) in sizeForm.datas" :key="index">
                <div class="content"><span>{{index+1}}.</span>{{item.question}}<span style="color:#409EFF">(提示：{{item.explains}})</span></div>
                <div v-if="item.url !==''"><img :src="item.url" alt="" style="max-width:300px"></div>
                <!-- <el-checkbox-group v-model="sizeForm.changeAnswers" @change="changes">
                    <el-checkbox :label="1" border v-if="item.item1!==''">{{item.item1}}</el-checkbox>
                    <el-checkbox :label="2" border v-if="item.item2!==''">{{item.item2}}</el-checkbox>
                    <el-checkbox :label="3" border v-if="item.item3!==''">{{item.item3}}</el-checkbox>
                    <el-checkbox :label="4" border v-if="item.item4!==''">{{item.item4}}</el-checkbox>
                </el-checkbox-group> -->
                <div class="change">
                    <span :class="{'lightColor': item.answer == 1}">A.{{item.item1}}</span>
                    <span :class="{'lightColor': item.answer == 2}">B.{{item.item2}}</span>
                    <span :class="{'lightColor': item.answer == 3}" v-if="item.item3!==''">C.{{item.item3}}</span>
                    <span :class="{'lightColor': item.answer == 4}" v-if="item.item4!==''">D.{{item.item4}}</span>
                </div>
            </el-form-item>
            <el-form-item v-show="sizeForm.answers.length">
                <ul>
                    <div>答案：<span style="color:#F56C6C">* 注：因答案接口为假数据固不能作为真实答案进行参考，以实际教科书为准</span></div>
                    <span style="display:inline-block;margin:0 20px 0 0;" v-for="(item,index) in sizeForm.answers" :key="index">{{index+1}}. {{item}}</span>
                </ul>
            </el-form-item>
            <el-form-item size="large" class="botBtns" v-show="sizeForm.datas.length">
                <el-button type="primary" :disabled="sizeForm.datas.length == 0" size="mini" @click="getAnswers()">查看答案</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
            return {
                isLoading: false,
                idsArr: [],
                sizeForm: {
                    datas: [],
                    answers: [],
                },
                options: [
                    {
                        value: 1, label: '科目一', children:  [
                            {
                                value: 'c1',label: 'c1', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'c2',label: 'c2', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'b1',label: 'b1', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'b2',label: 'b2', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'a1',label: 'a1', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'a2',label: 'a2', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                        ]
                    },
                    {
                        value: 4, label: '科目四', children:  [
                            {
                                value: 'c1',label: 'c1', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'c2',label: 'c2', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'b1',label: 'b1', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'b2',label: 'b2', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'a1',label: 'a1', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                            {
                                value: 'a2',label: 'a2', children: [ 
                                    {value: 'rand', label: '随机试题'},
                                    {value: 'order', label: '全部试题'}
                                ]
                            },
                        ]
                    }
                ],
                selectedOptions: []
            }
        },
        computed:{
        },
        mounted () {
        },
        methods: {
            getQuestion () {
                this.isLoading = true;
                this.sizeForm.answers = [];
                const params = {
                    url:'jztk/query',
                    data:{
                        key: 'ce010760e7c6d2c810aaef4b21c19688',
                        subject: this.selectedOptions[0],
                        model: this.selectedOptions[1],
                        testType: this.selectedOptions[2]
                    }
                }
                this.api.post(params,res=>{
                    res.forEach((item)=>{
                        this.idsArr.push(item.id);
                    })
                    this.sizeForm.datas = res
                    this.isLoading = false;
                })
            },
            getAnswers(){
                this.sizeForm.answers = [];
                let params = {
                    url: 'jztk/answers',
                    data: {
                        key: 'ce010760e7c6d2c810aaef4b21c19688',
                        id: this.idsArr.join(',')
                    }
                }
                this.api.post(params, res=>{
                    for(let i in res){
                        this.sizeForm.answers.push(res[i])
                    }
                })
            },
            handleChange(val){
                this.selectedOptions = val
                this.getQuestion();
            }
        },
        components: {
        }
    }
</script>

<style>
    .botBtns.el-form-item--large{
        position: fixed;
        bottom: 0;
        background: #333;
        left: 200px;
        right: 0;
        z-index: 999;
        margin: 0;
        padding: 20px 0;
        text-align: center
    }
    .botBtns .el-form-item__content{
        margin: 0 !important;
    }
    .change span{
        display: inline-block;
        margin: 0 10px 0 0;
    }
    .lightColor{
        color: #67C23A;
    }
</style>