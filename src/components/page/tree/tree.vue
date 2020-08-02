<template>
    <div class="vuePage">
        <el-tree 
            @check-change="handleClick" 
            :check-strictly='false' 
            :data="data" 
            show-checkbox 
            node-key="id"
            ref="tree" 
            highlight-current 
            :props="defaultProps">
        </el-tree>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checked" @change="handleCheckAllChange">全选</el-checkbox>
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
           return {
               checked: false,
               isIndeterminate: true,
               len: 0,
               treeData:{
                   ids: [8,10]
               },
               data: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                            }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                    }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
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
            this.$refs.tree.setCheckedKeys(this.treeData.ids);
            this.getLength(this.data)
        },
        methods: {
            handleClick(data, checked, node){
                if(checked){
                    this.$refs.tree.setChecked([data]);
                    this.treeData.ids = this.$refs.tree.getCheckedKeys();
                }
                let checkedCount = this.$refs.tree.getCheckedKeys().length
                this.checked = checkedCount === this.len;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.len;
            },
            handleCheckAllChange(){
                if (this.checked) {
                    this.$refs.tree.setCheckedNodes(this.data);
                    let checkedCount = this.$refs.tree.getCheckedKeys().length
                    this.isIndeterminate = checkedCount > 0 && checkedCount < this.len
                } else {
                    this.$refs.tree.setCheckedKeys([]);
                }
            },
            getLength(data){
                data.map(v=>{
                    if(v.children){
                        this.getLength(v.children)
                    }
                })
                this.len += data.length
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
</style>