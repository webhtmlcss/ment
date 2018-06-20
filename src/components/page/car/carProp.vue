<template>
    <div class="componentPage">
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
            <div><span style="color:#F56C6C">* 注：答案接口为假数据，不能全信</span></div>
            <span style="display:inline-block;margin:10px 20px 10px 0;" v-for="(item,index) in data" :key="index">{{index+1}}. {{item}}</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="closeProp">取 消</el-button>
                <el-button type="primary" @click="closeProp">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                dialogVisible: true
            }
        },
        computed:{
        },
        mounted () {
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                .then(_ => {
                    this.$emit('consoleProp')
                    done();
                })
                .catch(_ => {});
            },
            closeProp(){
                this.$emit('consoleProp')
            }
        },
        components: {
        },
        props: ['data']
    }
</script>

<style>
</style>