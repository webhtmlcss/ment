<template>
    <div class="componentPage">
        <div class="lhl"><span class="icon-grin"></span> 笑话列表</div>
        <el-date-picker
            v-model="days"
            type="date"
            placeholder="选择日期"
            @change="changed"
            value-format="timestamp"
            size="mini"
            :picker-options="pickerOptions1"
            style="margin-bottom: 20px;">
        </el-date-picker>
        <el-table
        :data="arr"
        style="width: 100%"
        border
        size="mini"
        v-loading="isLoading"
        @sort-change="tableSort">
            <el-table-column
            label="序号"
            type="index"
            :index="indexMethod">
            </el-table-column>
            <el-table-column
            label="内容"
            sortable
            prop='sort'>
                <template slot-scope="scope">
                    {{scope.row.content}}
                </template>
            </el-table-column>
            <el-table-column
            label="日期"
            width="150">
                <template slot-scope="scope">
                    {{scope.row.updatetime}}
                </template>
            </el-table-column>
        </el-table>
        <pages :total="totalCount" @change="getFilterParam()"></pages>
    </div>
</template>

<script>
    import pages from "@/components/common/page";
    import {formatDate} from '@util'
    export default {
        data () {
            return {
                arr: [],
                totalCount: 0,
                page: 1,
                pageSize: 10,
                isLoading: false,
                days: '',
                timers: '',
                sortType: 'asc',
                sortFlag: false,
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                }
            }
        },
        computed:{
        },
        mounted () {
            let date = new Date();
            this.days = date;
            this.timers = this.days.getTime().toString().substr(0,10)
            this.getData();
        },
        methods: {
            getData(){
                this.isLoading = true;
                const params = {
                    url: 'joke/content/list.php',
                    data: {
                        key:'d64897b54ea2618e145660dde401a312',
                        page:this.page || 1,
                        pagesize:this.pageSize || 10,
                        sort: this.sortType,
                        time: this.timers
                    }
                }
                this.api.post(params, (res) => {
                    this.arr = res.data
                    this.arr.length?this.totalCount = 500:this.totalCount = this.arr.length
                    this.isLoading = false;
                },(error)=>{
                    this.$message({
                        message: '请求数据错误',
                        type: 'error'
                    })
                })
            },
            indexMethod(index){
                return index + 1
            },
            getFilterParam(){
                this.page = this.$route.query.currentPage ? parseInt(this.$route.query.currentPage) : 1;
                this.pageSize = this.$route.query.pageSize ? parseInt(this.$route.query.pageSize) : 10;
                this.getData();
            },
            changed(val){
                this.timers = val?val.toString().substr(0,10):this.timers
                this.getData();
            },
            tableSort(column, prop, order ){
                if(column.prop == 'sort'){
                    this.sortFlag?this.sortType='DESC':this.sortType='ASC';
                    this.sortFlag=!this.sortFlag;
                    this.getData();
                }
            }
        },
        components: {
            pages
        }
    }
</script>

<style>
    .lhl{width: 100%;text-align: center;font-size: 30px;margin: 20px 0;}
</style>
