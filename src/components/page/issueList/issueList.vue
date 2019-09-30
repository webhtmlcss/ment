<template>
<div>
    <el-row class="vuePage">
        <el-row class="addTags">
            <el-button size="mini" type="primary" @click="controlPopup">添加标签</el-button>
        </el-row>
        <el-row type="flex" justify="space-between" class="listRow">
            <el-col :span="11" class="listItem" v-for="(item, idx) in list" :key="idx">
                <el-col :span="16" class="leftDom">
                    <el-col :span="6" align="center">
                        <img :src="imgFlag" />
                    </el-col>
                    <el-col :span="16">
                        <h4 class="item_title">{{item.title}}</h4>
                        <div class="item_summary">{{item.summary}}</div>
                        <div class="colorText">{{item.url}}</div>
                    </el-col>
                </el-col>
                <el-col :span="4" align="center">
                    <el-button size="mini" type="primary" @click="controlPopup(item.id)">编辑</el-button>
                </el-col>
                <el-col :span="4">
                    <el-button size="mini" @click="cancelDefault">{{item.defaultFlag?'取消默认':'设为默认'}}</el-button>
                </el-col>
                <div class="defaultBtn" v-if="item.defaultFlag">默认</div>
            </el-col>
        </el-row>
    </el-row>
    <!-- 添加、编辑窗口 -->
    <el-dialog :title="propupTitle" :visible.sync="dialogFormVisible" @close="cancel('issusForm')">
        <el-form :model="form" :rules="rules" ref="issusForm" label-width="100px" size="mini" class="issusForm">
            <el-form-item label="标签名称" prop="title">
                <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="标签简介">
                <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="标签网址">
                <el-input v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="设为默认">
                <el-switch
                v-model="form.defautVal">
                </el-switch>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel('issusForm')">取 消</el-button>
            <el-button type="primary" @click="submitForm('issusForm')">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
           return {
                list: [
                    {id: 1, title: '中企动力', summary: '帮助企业实现数字化智能经营的中企动力云平台', imgPath: '../../../assets/images/zq.png', url: 'www.300.cn', defaultFlag: true},
                    {id: 2, title: '中企动力1', summary: '1111111', imgPath: '../../assets/images/zq.png', url: 'www.300.cn', defaultFlag: false},
                    {id: 3, title: '中企动力2', summary: '2222222', imgPath: '../../../assets/images/zq.png', url: 'www.300.cn', defaultFlag: false},
                    {id: 4, title: '中企动力3', summary: '333333333', imgPath: '../../../assets/images/zq.png', url: 'www.300.cn', defaultFlag: false}
                ],
                imgFlag: '../../assets/images/zq.png',
                dialogFormVisible: false, // 弹窗显示隐藏变量
                propupTitle: '', // 弹窗标题变量
                form: {
                    id: '',
                    title: '',
                    defautVal: false
                }, //弹窗数据对象
                // 表单验证
                rules: {
                    title: [
                        { required: true, message: '请输入标签名称', trigger: 'blur' }
                    ]
                }
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
            // 设为默认
            cancelDefault(id){

            },
            // 新增、编辑
            controlPopup(id){
                if(+id){
                    console.log('调用编辑接口')
                }else{
                    console.log('调用新增接口')
                }
                this.propupTitle = +id ? '编辑标签' : '新增标签';
                this.dialogFormVisible = true;
            },
            // 新增、编辑确定按钮
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogFormVisible = false;
                    }
                });
            },
            // 取消、关闭表单提交
            cancel(formName){
                this.$refs[formName].resetFields();
                this.dialogFormVisible = false;
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
    .vuePage{
        font-size: 14px;
    }
    .listRow{
        flex-wrap: wrap;
        padding: 0 50px;
    }
    .addTags{
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .listItem{
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 10px;
        border: 1px solid #ccc;
        margin-bottom: 15px;
    }
    .listItem img{
        height: 100%;
        width: 100%;
    }
    .leftDom{
        display: inline-flex;
        align-items: center;
        justify-content:space-between
    }
    .item_title{
        margin: 0;
        padding: 0;
    }
    .item_summary{
        color: #ccc;
    }
    .colorText{
        color: #409EFF;
    }
    .defaultBtn{
        position: absolute;
        left: 0;
        top: 0;
        background: #409EFF;
        color: #fff;
        padding: 2px 10px;
    }
    .issusForm{
        width: 400px;
    }
</style>