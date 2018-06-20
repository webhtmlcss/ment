<template>
    <div class="componentPage">
        <div class="lhl el-icon-date">老黄历</div>
        <el-form label-width="120px" :model="date" v-loading="isLoading">
            <el-form-item label="日期：">
                <el-date-picker
                    v-model="days"
                    type="date"
                    placeholder="选择日期"
                    @change="changed"
                    value-format="yyyy-MM-dd"
                    size="mini">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="阴历：">
                <span>{{date.yinli || '暂无'}}</span>
            </el-form-item>
            <el-form-item label="五行：">
                {{date.wuxing || '暂无'}}
            </el-form-item>
            <el-form-item label="冲煞：">
                {{date.chongsha || '暂无'}}
            </el-form-item>
            <el-form-item label="彭祖百忌：">
                {{date.baiji || '暂无'}}
            </el-form-item>
            <el-form-item label="吉神宜趋：">
                {{date.jishen || '暂无'}}
            </el-form-item>
            <el-form-item label="宜：">
                {{date.yi || '暂无'}}
            </el-form-item>
            <el-form-item label="凶神宜忌：">
                {{date.xiongshen || '暂无'}}
            </el-form-item>
            <el-form-item label="忌：">
                {{date.ji || '暂无'}}
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {formatDate} from '@util'
    export default {
        data () {
            return {
                date:{},
                days:'',
                isLoading: false,
            }
        },
        computed:{
        },
        mounted () {
            let date = new Date();
            this.days = formatDate(date,'yyyy-MM-dd');
            this.calendars(this.days)
        },
        methods: {
            calendars(val){
                this.isLoading = true;
                const params = {
                    url: 'laohuangli/d',
                    data: {
                        key: 'fff6a8e36c55ec051c11b6a414c0b0d6',
                        date: val
                    }
                }
                this.api.post(params, res => {
                    this.date = res
                    this.isLoading = false;
                },error =>{
                    this.$message({
                        message: '请求错误',
                        type: 'error'
                    })
                })
            },
            changed(val){
                if(!val){
                    this.$message({
                        message:'请选择正确日期',
                        type:'warning'
                    })
                    return false;
                }
                this.calendars(val)
            }
        },
        components: {
        }
    }
</script>

<style>
    .lhl{width: 100%;text-align: center;font-size: 30px;margin: 20px 0;}
</style>