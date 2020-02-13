<template>
    <div class="vuePage">
        <el-cascader
            size="large"
            :options="options"
            v-model="selectedOptions"
            @change="handleChanges"
            clearable
            :props="{ expandTrigger: 'hover' }"></el-cascader>
            <!-- <el-input v-model="areaText"></el-input>
            <el-link type="primary" :underline="false" @click="changeArea">+添加地区</el-link> -->
            <el-dialog
                title="选择配送地区"
                :visible.sync="dialogVisible"
                width="60%"
                class="areaBox"
                :before-close="handleClose">
                <el-tree
                    ref="tree"
                    :data="options"
                    show-checkbox
                    node-key="value"
                    :props="defaultProps"
                    @check-change='handleChange'>
                </el-tree>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="areaChanged">确 定</el-button>
                </span>
            </el-dialog>



            <el-form ref="form" :model="form" label-width="">
                <div class="artaItem" v-for="(item,idx) in form.inputData" :key="idx">
                    <el-form-item label="" class="a-fitem">
                        <el-input v-model="item.ccc"></el-input>
                        <el-link type="primary" :underline="false" @click="changeArea(idx)">+添加地区</el-link>
                    </el-form-item>
                    <el-form-item label="" class="a-fitem">
                        <el-input v-model="item.ddd"></el-input>
                        <el-input v-model="item.eee"></el-input>
                    </el-form-item>
                    <el-form-item label="" class="a-fitem a-fitem-btn">
                        <el-button @click="del(idx)">删除</el-button>
                    </el-form-item>
                </div>
                <el-link type="primary" :underline="false" @click="copy">复制</el-link>
            </el-form>
            <br>
            <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
            <br>
            <tc><el-button type="warning" size="mini">点我</el-button></tc>
    </div>
</template>

<script>
    import { regionData } from 'element-china-area-data'
    import tc from './tanchuang.vue'
    export default {
        data () {
           return {
                dialogVisible: false,
                options: regionData,
                selectedOptions: [],
                indexFlag:'',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                form:{
                    areaText: '',
                    inputData: [
                        {ccc:'',ddd:'',eee:'',fff:''}
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
            changeArea(idx){
                this.dialogVisible = true;
                this.indexFlag = idx;
            },
            handleChanges(val){
                console.log(val)
            },
            handleChange (val,val1,val2) {
                console.log(val,val1,val2);
                if(val.children && val.children.length){
                    console.log(val.label,'xxzcz')
                    console.log(val.value,'idididid')
                }
                // if(val1){
                //     // console.log(val)
                // }
                
                // console.log(val)
            },
            handleClose(){
                this.dialogVisible = false;
            },
            copy(){
                let obj = {}
                obj.ccc = ''
                obj.ddd = ''
                obj.eee = ''
                obj.fff = ''
                this.form.inputData.push(obj);
            },
            del(idx){
               this.form.inputData.splice(idx,1);
            },
            // 确定
            areaChanged(){
                this.dialogVisible = false;
                // let checkedArr = this.$refs.tree.getCheckedNodes();
                let checkedArr = this.$refs.tree.getHalfCheckedNodes();
                console.log(checkedArr,'checkedArrcheckedArr');
                
                checkedArr.map(v => {
                    let node = this.$refs.tree.getNode(v.value);
                    console.log(node.checked);
                    
                //     console.log(this.$refs.tree.getNode(v.value),'xxx');
                    
                //     let pObj = this.$refs.tree.getNode(v.value).parent;
                //     let ppObj = this.$refs.tree.getNode(v.value).parent.parent;
                //     let pVal = '',
                //         pId = ''

                //     if(!this.$refs.tree.getNode(v.value).childNodes.length){
                //         pVal = ppObj.label
                //     }else if(this.$refs.tree.getNode(v.value).childNodes && pObj){
                //         pVal = pObj.label
                //     }else{
                //         pVal = this.$refs.tree.getNode(v.value).label
                //     }
                //     console.log(pVal);
                })
                
            }
        },
        components: {
            tc
        },
        props: {
            paramName: {
               type: Object
            }
        }
    }
</script>

<style>
    .areaBox .el-dialog__body{
        max-height: 300px;
        overflow-y: scroll;
    }
    .artaItem{
        border-bottom: 1px solid #ccc;
        margin-bottom: 22px;
    }
    .artaItem .a-fitem{
        display: inline-block;
        width: 40%;
        margin-right: 3%;
        vertical-align: middle;
    }
    .artaItem .a-fitem:last-child{
        width: 10%;
        margin-right: 0;
    }
    .artaItem .a-fitem .el-input__inner{
        margin-bottom: 10px;
    }
</style>