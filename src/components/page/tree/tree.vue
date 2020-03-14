<template>
    <div class="vuePage">
        <el-tree 
            @check-change="handleClick" 
            :check-strictly = 'true' 
            :data="data" 
            show-checkbox 
            node-key="id" 
            ref="tree" 
            highlight-current 
            :props="defaultProps"
            :default-expanded-keys="treeData.ids">
        </el-tree>
    </div>
</template>

<script>
    //import *** from "组件路径";
    export default {
        data () {
           return {
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
        },
        methods: {
            handleClick(data,checked, node){
                if(checked){
                    this.$refs.tree.setChecked([data]);
                    this.treeData.ids = this.$refs.tree.getCheckedKeys();
                    console.log(this.treeData.ids);
                    // this.$refs.tree.store.nodesMap[data.id].expanded = true;
                }
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