<template>
    <div class="vuePage">
       <el-tree
        :data="areadata"
        ref="tree"
        show-checkbox
        node-key="id"
        :default-expand-all="false"
        :props="defaultProps"
        @check-change="treeChange">
        </el-tree>
    </div>
</template>

<script>
    //import *** from "组件路径";
    import { pca, pcaa } from 'area-data'; // 城市数据
    export default {
        data () {
            return {
                areadata: [],
                defaultProps:{
                    children: 'children',
                    label: 'name'
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
            let aa = []
            for(let a in pca){
                for(let b in pca[a]){
                    let bb = {}
                    bb.id = b 
                    bb.name = pca[a][b]
                    aa.push(bb)
                }
            }
            this.areadata = this.aaFn(pca)
        },
        methods: {
            aaFn(data){
                let pData = data[86]
                let aa = []
                for(let a in pData){
                    let obj = {}
                    obj.id = a;
                    obj.name = pData[a]
                    aa.push(obj)
                }
                aa.forEach((item,idx)=>{
                    item.children = new Array();
                    for(let i in data){
                        if(i.length > 2 && item.id == i){
                            let bb = []
                            for(let a in data[i]){
                                let obj = {}
                                obj.id = a;
                                obj.name = data[i][a]
                                if(a.lastIndexOf('00') > 0){
                                    bb.push(obj)
                                }
                            }
                            item.children=bb
                        }
                    }
                })
                aa.map(v=>{
                    let xx = {}
                    if(!v.children.length){
                        xx.id = v.id
                        xx.name = v.name
                        v.children.push(xx)
                    }
                    // v.children.map(cc=>{
                    //     if(cc.id.lastIndexOf('00') < 0){
                    //         xx.id = v.id
                    //         xx.name = v.name
                    //         v.children.push(xx)
                    //     }
                    // })
                })
                    
                // aa.forEach((item,idx)=>{
                //     console.log(item);
                //     if(!item.children.length){
                //         item.children.push(item)
                //         return;
                //     }
                // })
                return aa
            },
            treeChange(data, checked, node){
                // if(checked){
                    // console.log(this.$refs.tree.getCheckedKeys())
                    let obj = {
                        textData: '',
                        codeData: []
                    }
                    let textArr = this.$refs.tree.getCheckedNodes();
                    let banxuan = this.$refs.tree.getHalfCheckedNodes();
                    this.$emit('sendDqData', textArr, banxuan)
                // }
                
            },
            setCheckedKeys(checkIds) {
                this.$refs.tree.setCheckedKeys(checkIds);
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