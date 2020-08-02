<template>
    <div class="vuePage">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" size="small">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="添加配送方式" name="1" id="item0" class="cItems jbxxBox">
                    <el-form-item label="排序码:" prop="sortMa" class="">
                        <el-input placeholder="数字小展示靠前(1-4位数字)" v-model.trim="ruleForm.sortMa"></el-input>
                    </el-form-item>
                    <el-form-item label="是否启用:" prop="" class="">
                        <el-switch
                            class="switchOn"
                            v-model="ruleForm.isOnOff"
                            @change="ruleFormIsOnOff"
                            active-text="显示"
                            inactive-text="隐藏"
                            >
                        </el-switch>
                    </el-form-item>
                    <el-form-item label="配送方式名称:" prop="psName" class="">
                        <el-input placeholder="最长30字符，支持汉字、英文、数字 ”-“、“_”空格" v-model="ruleForm.psName"></el-input>
                    </el-form-item>
                    <el-form-item label="选择默认的物流公司:" prop="wlgs" class="">
                        <el-select v-model="ruleForm.wlgs" @change="wlChange" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="类型:" prop="" class="">
                        <el-checkbox v-model="ruleForm.checked" @change="checkChange">支持货到付款</el-checkbox>
                    </el-form-item>
                    <el-row class="costemStyle"><div>重量设置:</div></el-row>
                    <el-row class="w50">
                        <el-form-item label="首重重量:" prop="szzl" class="styleItem">
                            <el-input placeholder="请输入首重重量" v-model="ruleForm.szzl"></el-input>
                        </el-form-item>
                        <el-form-item label="续重重量:" prop="xzzl" class="styleItem">
                            <el-input placeholder="请输入首重重量" v-model="ruleForm.xzzl"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-row class="costemStyle"><div>默认配送费用:</div></el-row>
                    <el-row class="w50">
                        <el-form-item label="首重费用:" prop="szfy" class="styleItem">
                            <el-input placeholder="请输入首重费用" v-model="ruleForm.szfy"></el-input>
                        </el-form-item>
                        <el-form-item label="续重费用:" prop="xzfy" class="styleItem">
                            <el-input placeholder="请输入续重费用" v-model="ruleForm.xzfy"></el-input>
                        </el-form-item>
                    </el-row>
                    <el-form-item label="默认配送费用适用地区:" prop="psdq" class="">
                        <template>
                            <el-radio-group v-model="ruleForm.psdq" @change="changeQD">
                                <el-radio :label="1">所有地区适用</el-radio>
                                <el-radio :label="2">指定部分地区城市设置运费</el-radio>
                            </el-radio-group>
                        </template>
                        <el-row v-if="changeQDFlag" class="rowBox">
                            注意：未勾选时，不在指定配送地区的顾客不能使用本配送方式下订单 <el-checkbox v-model="ruleForm.checkedDQ" @change="checkDQChange" class="checkQtdq">除指定地区外，其余地区的运费采用“默认配送运费”</el-checkbox>
                            <div v-for="(item,index) in ruleForm.bigData" :key="index" class="dqBox">
                                <el-row class="w50">
                                    <el-form-item label="" prop="" class="styleItem">
                                        <el-input :readonly="true" placeholder="请选择地区" v-model="item.areaCode"></el-input>
                                    </el-form-item>
                                    <el-form-item class="styleItem" label="首重费用:" :prop="'bigData.' + index + '.littleSzfy'" :rules="{required: true, message: '请输入首重费用', trigger: 'blur'}">
                                        <el-input placeholder="请输入首重费用" v-model="item.littleSzfy"></el-input>
                                    </el-form-item>
                                </el-row>
                                <el-row class="w50">
                                    <el-form-item label="" prop="" class="styleItem">
                                        <el-button type="text" size="small" @click="bandelDQ(item,index)">地区选择</el-button>
                                    </el-form-item>
                                    <el-form-item class="styleItem" label="续重费用:" :prop="'bigData.' + index + '.littleXzfy'" :rules="{required: true, message: '请输入续重费用', trigger: 'blur'}">
                                        <el-input placeholder="请输入续重费用" v-model="item.littleXzfy"></el-input>
                                    </el-form-item>
                                </el-row>
                                <el-button class="delBtn" v-if="index > 0" type="primary" size="small" @click="delItem(item)">删除</el-button>
                            </div>
                            <el-row><el-button @click="addQtdqDemo" type="primary">[+]为指定地区设置运费</el-button></el-row>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="说明:" prop="" class="">
                        <el-input type="textarea" placeholder="" v-model="ruleForm.shuom"></el-input>
                    </el-form-item>
                </el-collapse-item>
            </el-collapse>
            <div class="saveBtnCon">
                <el-button size="small" type="primary" @click="submit('ruleForm')" class="submit">保存</el-button>
                <el-button size="small" @click="cancel">取消</el-button>
            </div>
            <el-dialog class="diquDialog" title="选择地区" :visible.sync="dqdialog" v-if='dqdialog' :before-close="hendelClose">
                <dq ref="dq" @sendDqData="getDqData"></dq>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="closeDialog('close')">取 消</el-button>
                    <el-button type="primary" @click="closeDialog('add')">确 定</el-button>
                </span>
            </el-dialog>
       </el-form>
    </div>
</template>

<script>
    //import *** from "组件路径";
    import dq from './diqu'
    export default {
        data () {
            let validSortMa = (rule, value, callback) => {
                if(Number(value) && value.indexOf('.') < 0){
                    callback()
                }else{
                    callback(new Error('请输入正确数字'));
                }
            };
            let validSortPsName = (rule, value, callback) => {
                let reg = /^[ A-Za-z0-9"\“\”\、\-\_\u4E00-\u9FA5A]*$/
                if(reg.test(value) && value.length){
                    callback()
                }else{
                    callback(new Error('最长30字符，支持汉字、英文、数字 ”-“、“_”空格'));
                }
            }
            let validPsdq = (rule, value, callback) => {
                if(value){
                    callback()
                }else{
                    callback(new Error('请选择适用地区'))
                }
            }
           return {
                activeNames: '1',//折叠面板
                changeQDFlag: false,//选择部分地区标识
                dqdialog: false,//地区弹窗
                indexChange:0,//选择地区当前数据
                ruleForm:{
                    sortMa: '',//排序码
                    isOnOff: true,//启用停用
                    psName: '',//配送方式名称
                    wlgs: '',//物流公司
                    checked: false,//货到付款
                    szzl: '',//首重重量
                    xzzl: '',//续重重量
                    szfy: '',//首重费用
                    xzfy: '',//续重费用
                    psdq: 1,//适用地区
                    //部分地区
                    checkedDQ: false,
                    bigData:[
                        {
                            areaCode:'',
                            littleSzfy: '',//部分地区首重费用
                            littleXzfy: '',//部分地区续重费用
                        }
                    ],
                    checkObj:{},
                    //部分地区结束
                    shuom: '',//说明
                },
                areaDataObj:{},//地区对象，存每组地区id
                dqArr:[],//选中地区id
                options: [
                    {label: 123, value: 123}
                ],
                rules:{
                    sortMa: [
                       {required: true, validator: validSortMa, trigger: 'blur'},
                       {max: 256, message: '长度在256个字符', trigger: 'blur'}
                    ],
                    psName: [
                        {required: true, validator: validSortPsName, trigger: 'blur'},
                        {max: 30, message: '最长30字符，支持汉字、英文、数字 ”-“、“_”空格', trigger: 'blur'}
                    ],
                    wlgs: [
                        {required: true, message: 'asd', trigger: 'change'}
                    ],
                    szzl: [
                       {required: true, message: '请输入首重重量', trigger: 'blur'},
                       {max: 256, message: '长度在256个字符', trigger: 'blur'}
                    ],
                    xzzl: [
                       {required: true, message: '请输入续重重量', trigger: 'blur'},
                       {max: 256, message: '长度在256个字符', trigger: 'blur'}
                    ],
                    szfy: [
                       {required: true, message: '请输入首重费用', trigger: 'blur'},
                       {max: 256, message: '长度在256个字符', trigger: 'blur'}
                    ],
                    xzfy: [
                       {required: true, message: '请输入续重费用', trigger: 'blur'},
                       {max: 256, message: '长度在256个字符', trigger: 'blur'}
                    ],
                    psdq: [
                        {required: true, validator: validPsdq, trigger: 'change'}
                    ],
                },
                areaString: ''
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
            handleChange(val){},
            ruleFormIsOnOff(val){
                this.ruleForm.isOnOff = val;
            },
            wlChange(val){
                this.ruleForm.wlgs = val
            },
            checkChange(val){
                this.ruleForm.checked = val
            },
            changeQD(val){
                if(val == 2){
                    this.changeQDFlag = true;
                }else{
                    this.changeQDFlag = false;
                }
            },
            checkDQChange(val){
                this.ruleForm.checkedDQ = val;
            },
            // 动态添加
            addQtdqDemo(){
                let obj = {
                    areaCode:'',
                    littleSzfy: '',//部分地区首重费用
                    littleXzfy: '',//部分地区续重费用
                }
                this.ruleForm.bigData.push(obj)
            },
            // 删除添加项
            delItem(item){
                var index = this.ruleForm.bigData.indexOf(item)
                if (index !== -1) {
                    this.ruleForm.bigData.splice(index, 1)
                }
            },
            // 选择地区
            bandelDQ(item,idx){
                this.dqdialog = true;
                this.indexChange = this.ruleForm.bigData.indexOf(item);
                this.$nextTick(()=>{
                    this.$refs.dq.$refs.tree.setCheckedKeys([])
                    console.log(this.areaDataObj,'this.areaDataObj');
                    for(var i in this.areaDataObj){
                        if(i == idx){
                            this.$refs.dq.$refs.tree.setCheckedKeys(this.areaDataObj[i])
                        }
                    }
                })
            },
            getDqData(data, banxuan){
                this.getPropData = banxuan;//部分地区
                this.getPropDataAll = data;//全部地区
            },
            hendelClose(){
                this.dqdialog = false;
            },
            // 关闭地区弹窗
            closeDialog(strFlag){
                this.dqdialog = false;
                if(strFlag == 'close'){
                }else{
                    var areaText = '';
                    if(!!this.getPropData || !!this.getPropDataAll){
                        this.getPropDataAll.forEach((a,b)=>{
                            if(a.children){
                                areaText += a.name + '(全部地区)，'
                            }
                            this.dqArr.push(a.id);
                            // this.ruleForm.bigData[this.indexChange].areaCodeIds.push(a.id);
                        })
                        this.getPropData.forEach((a,b)=>{
                            areaText += a.name + '(部分地区)，'
                        })
                    }
                    if(areaText.lastIndexOf('，')>-1){
                        areaText=areaText.substr(0,areaText.length-1)
                    }
                    this.ruleForm.bigData[this.indexChange].areaCode = areaText;
                    this.areaDataObj[this.indexChange] = this.dqArr
                    this.$refs.dq.$refs.tree.setCheckedKeys([])
                    this.dqArr=[]
                }
            },
            // 添加确定
            submit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('提交');
                    }else{
                        console.log('必填项');
                        console.log(this.dqArr);
                    }
                })
            },
            // 添加取消
            cancel(){
                this.$router.go(-1)
            }
        },
        components: {
            dq
        },
        props: {
            paramName: {
               type: Object
            }
        }
    }
</script>

<style>
.saveBtnCon{text-align: right;}
.costemStyle{padding-left: 112px;}
.costemStyle div{border-bottom: 1px solid #dcdfe6; padding-bottom: 10px; font-size: 14px;}
.w50{margin-top: 20px;}
.w50 .styleItem{float: left; width: 50%;}
.checkQtdq{margin-left: 20px;}
.rowBox .w50 .styleItem{float: left;width: 45% !important;}
.dqBox{position: relative; border-bottom: 1px solid #dcdfe6; margin-bottom: 10px;}
.delBtn{position: absolute; right: 0; top: 50%; margin-top: -20px;}
.diquDialog .el-dialog__body{max-height: 500px; overflow: auto;}
.saveBtnCon .submit{float: left;}
</style>