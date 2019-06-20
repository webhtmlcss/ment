<template>
    <div class="vuePage">
       <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
           <el-row class="textTopTips">
               <el-col :span="24">
                   <i class="el-icon-info"></i> 以下内容均为必提交信息，请务必提交正确的基本信息，以及正确的产品信息，以保证账户的正常开通，仅提供提交一次资料，请谨慎操作
               </el-col>
           </el-row>
           <el-row class="textTips">
               <el-col :span="24">
                   基本信息：
               </el-col>
           </el-row>
           <!-- 公司名称 -->
           <el-form-item label="公司名称：name" prop="name">
               <el-row>
                   <el-col :span="12"><el-input type="input" v-model="ruleForm.name" placeholder="请输入公司名称"></el-input></el-col>
                   <el-col :span="10">（每个单词首字母须大写，其余为小写，不支持全部内容为大写）</el-col>
               </el-row>
            </el-form-item>
            <!-- 日期 -->
           <el-form-item label="公司成立日期 年/月：StartDate" prop="date">
                <el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <!-- 电话 -->
           <el-form-item label="电话号码：PhoneNumber" prop="tel">
               <el-row>
                   <el-col :span="12"><el-input type="input" v-model="ruleForm.tel" placeholder="请输入手机号码或者座机号码"></el-input></el-col>
                   <el-col :span="10">（只能填写一个）</el-col>
               </el-row>
            </el-form-item>
            <!-- 邮箱 -->
           <el-form-item label="邮箱：Email" prop="email">
               <el-row>
                   <el-col :span="12"><el-input type="input" v-model="ruleForm.email" placeholder="请输入邮箱地址"></el-input></el-col>
                   <el-col :span="10">（不支持已注册或注册未成功邮箱）</el-col>
               </el-row>
            </el-form-item>
            <!-- 密码 -->
           <el-form-item label="邮箱密码：Password" prop="password">
               <el-row>
                   <el-col :span="12"><el-input type="input" v-model="ruleForm.password" placeholder="请输入密码"></el-input></el-col>
                   <el-col :span="10">（填写与邮箱匹配的密码）</el-col>
               </el-row>
            </el-form-item>
            <!-- 公司官网 -->
           <el-form-item label="公司官网：Website" prop="webSide">
               <el-row>
                   <el-col :span="12"><el-input type="input" v-model="ruleForm.webSide" placeholder="请输入官网地址"></el-input></el-col>
                   <el-col :span="10">（不支持中文字符）</el-col>
               </el-row>
            </el-form-item>
            <!-- 公司地址 -->
           <el-form-item label="公司地址：Website" prop="address">
               <el-row>
                   <el-col :span="12"><el-input type="input" v-model="ruleForm.address" placeholder="请输入公司地址"></el-input></el-col>
               </el-row>
            </el-form-item>
            <!-- 公司地址 -->
           <el-form-item label="公司简介：About" prop="about">
               <el-row>
                   <el-col :span="16"><el-input type="textarea" :autosize="{ minRows: 8, maxRows: 8}" placeholder="最多不超过160个字符" v-model="ruleForm.about"></el-input></el-col>
               </el-row>
            </el-form-item>
            <!-- 主页图片 -->
            <el-row>
                <el-col :span="8">
                    <el-form-item label="主页图片：" prop="imageBaner">
                        <el-col :span="24" class="sizeTip">请根据要求上传图片,建议上传4MB以下图片</el-col>
                        <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        :limit=1
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="ruleForm.imageBaner" :src="ruleForm.imageBaner" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        Facebook Cover photo dimensions<br>
                        （主页banner，建议851 X 315 px ）
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="logoBox">
                    <el-form-item label="" prop="imageLogo">
                        <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="ruleForm.imageLogo" :src="ruleForm.imageLogo" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        Facebook profile image dimensions<br>
                        （主页logo，建议180 X 180 px） 
                    </el-form-item>
                </el-col>
            </el-row>
            <!-- 分割线 -->
            <el-row class="catLine">
                <el-col :span="24">产品信息：（请务必上传20张产品图片及产品相关描述，建议上传4MB以下图片）</el-col>
            </el-row>
            <!-- 分割线 -->
            <!-- 产品信息 -->
            <el-row class="proBox">
                <el-col :span="6">
                    <el-form-item :label="item.namel + (index+1) + item.namer" v-for="(item,index) in ruleForm.proData" :key="index" :rules="item.rules" :prop="'proData.' + index + '.proPic'">
                        <el-upload
                        class="avatar-uploader"
                        :action="uploadUrl"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="item.proPic" :src="item.proPic" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <el-col class="picTips">{{item.size}}</el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="18" class="rc">
                    <el-form-item  v-for="(item,index) in ruleForm.proData" :key="index" :rules="item.rules1" :prop="'proData.' + index + '.proVal'">
                        <el-input
                        type="textarea"
                        :autosize="{ minRows: 8, maxRows: 8}"
                        placeholder="请输入内容"
                        v-model="item.proVal">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <!-- 按钮 -->
            <el-row class="submitBox">
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                </el-form-item>
            </el-row>
       </el-form>
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
            // 公司名称的正则
            let validcodeName=(rule,value,callback)=>{
                let reg=/^[A-Z]{1}[a-z]*$/;
                if(!reg.test(value)){callback(new Error('不支持全部内容为大写，只支持英文且首字母大写'))
                }else{
                    callback()
                }
            };
            // 公司官网的正则
            let webSideName=(rule,value,callback)=>{
                let reg=/^[a-z]*$/;
                if(!reg.test(value)){callback(new Error('不支持中文字符'))
                }else{
                    callback()
                }
            };
           return {
                ruleForm: {
                    name: '',
                    date: '',
                    tel: '',
                    email: '',
                    password: '',
                    webSide: '',
                    address: '',
                    about: '',
                    imageBaner: '',
                    imageLogo: '',
                    proData: [
                        {
                            namel:'产品',
                            namer:'图片及描述：',
                            proPic:'',
                            proVal: '',
                            size: '建议上传500 X 500 px',
                            rules: [
                                { required: true, message: '请上传产品图片', trigger: 'blur' }
                            ],
                            rules1: [
                                { required: true, message: '产品描述不能为空', trigger: 'blur' },
                                { min: 0, max: 280, message: '最多不超过280个字符', trigger: 'blur' }

                            ],
                        },
                        {
                            namel:'产品',
                            namer:'图片及描述：',
                            proPic:'',
                            proVal: '',
                            size: '建议上传500 X 500 px',
                            rules: [
                                { required: true, message: '请上传产品图片', trigger: 'blur' },
                                { min: 0, max: 160, message: '最多不超过280个字符', trigger: 'blur' }
                            ],
                            rules1: [
                                { required: true, message: '产品描述不能为空', trigger: 'blur' },
                                { min: 0, max: 280, message: '最多不超过280个字符', trigger: 'blur' }
                            ],
                        },
                    ]
                },
                rules: {
                    name: [
                        { required: true, message: '请输入公司名称', trigger: 'blur' },
                        { min: 0, max: 100, message: '最多不超过100个字符', trigger: 'blur' },
                        { validator:validcodeName, trigger: 'blur' }
                    ],
                    date: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    tel: [
                        { required: true, message: '请输入电话号码', trigger: 'blur' },
                        { min: 0, max: 20, message: '最多不超过20个字符', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '请输入正确邮箱', trigger: 'blur' },
                        { min: 0, max: 20, message: '最多不超过50个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 0, max: 20, message: '最多不超过20个字符，填写与邮箱匹配的密码', trigger: 'blur' }
                    ],
                    webSide: [
                        { required: true, message: '请输入官网地址', trigger: 'blur' },
                        { min: 0, max: 100, message: '最多不超过100个字符', trigger: 'blur' },
                        { validator:webSideName, trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入公司地址', trigger: 'blur' },
                        { min: 0, max: 100, message: '最多不超过100个字符', trigger: 'blur' }
                    ],
                    about: [
                        { required: true, message: '不能为空', trigger: 'blur' },
                        { min: 0, max: 160, message: '最多不超过160个字符', trigger: 'blur' }
                    ],
                    imageBaner: [
                        { required: true, message: '图片格式或尺寸不符合要求', trigger: 'change' },
                    ],
                    imageLogo: [
                        { required: true, message: '图片格式或尺寸不符合要求', trigger: 'change' },
                    ]
                },
                // uploadUrl: __ce.baseURL+'/manageHomeApi/apply/upload',
                uploadUrl: '',
                fileList: []
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
		    //上传本地图片成功回调
            handleAvatarSuccess(res, file, fileList) {
                this.imageUrl = URL.createObjectURL(file.raw);
		    	if (response.status != 101) {
		    		this.$message({
                        type: 'error',
                        message: '上传失败！'
                    });
                    return;
		    	}
		    	let img = response.data;
		    	if (!this.multiple) {
					this.localImgList = [];
					fileList = [file];
		    	}
		    	this.localImgList.push(img);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt4M = file.size / 1024 / 1024 < 4;
                // const isLt2M = file.size / 1024 / 1024 < 2;
                // if (!isLt2M) {
                // this.$message.error('上传头像图片大小不能超过 2MB!');
                // }
                // return isJPG && isLt2M;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
		        if (!isLt4M) {
		          this.$message.error('图片大小不能超过 4MB!');
		        }
		        return isJPG && isLt4M;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$confirm('信息提交，将不允许修改，请确保已提供准确信息，是否确定提交？', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            this.$message({
                                type: 'success',
                                message: '提交成功!'
                            });
                        }).catch((e) => {
                            console.log(e)         
                        });
                    } else {
                        return false;
                    }
                });
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
        background: #fff;
        padding: 20px;
        font-size: 12px;
    }
    .vuePage .textTips{
        margin-bottom: 20px;
    }
    .vuePage .textTopTips{
        font-size: 14px;
        margin-bottom: 20px;
    }
    .vuePage .el-form-item__label{
        line-height: 20px;
        width: 128px;
    }
    .vuePage .el-form-item__content{
        font-size: 12px;
    }
    .vuePage .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .vuePage .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .vuePage .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .vuePage .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .vuePage .catLine{
        border-top: 1px solid #000;
        margin: 10px 0;
        padding: 10px 0;
    }
    .vuePage .rc .el-form-item__content{
        margin-left: 0 !important;
    }
    .vuePage .rc .el-form-item{
        min-height: 215px;
    }
    .vuePage .picTips{
        margin-top: -20px;
    }
    .vuePage .sizeTip{
        margin-top: -8px;
        color: #909399;
    }
    .vuePage .logoBox{
        margin-top: 32px;
    }
    .vuePage .logoBox .el-form-item__content{
        margin-left: 0 !important;
    }
    .vuePage .submitBox{
        margin-top: 30px;
    }
</style>