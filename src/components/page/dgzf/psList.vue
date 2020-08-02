<template>
    <div class="vuePage">
        <el-button type="primary" size="small" icon="el-icon-plus" @click="addOrEdit()" class="addBtn">添加物流方式</el-button>
        <el-table :data="tableData" style="width: 100%" class="wllb">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="psfs" label="配送方式" width="180"></el-table-column>
            <el-table-column prop="wlgs" label="物流公司"></el-table-column>
            <el-table-column prop="ps" label="排序"></el-table-column>
            <el-table-column prop="hdfk" label="货到付款">
                <template slot-scope="scope">
                    {{scope.row.hdfk ? '是' : '否'}}
                </template>
            </el-table-column>
            <el-table-column prop="zt" label="状态">
                <template slot-scope="scope">
                    {{scope.row.zt ? '是' : '否'}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="addOrEdit(scope.row.id)">编辑</el-button>
                    <el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
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
               tableData:[
                   {
                       id:1,
                       psfs:'aaa',
                       wlgs: '郑周建华',
                       ps: 20,
                       hdfk: true,
                       zt: true
                   }
               ]
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
            addOrEdit(id){
                var obj = {}
                obj.path = './add'
                id && (obj.query = {editId: id})
                this.$router.push(obj)
            },
            del(id){
                console.log(id);
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
    .addBtn{margin-bottom: 15px;}
    .wllb th .el-checkbox{position: absolute;z-index: -1;}
</style>