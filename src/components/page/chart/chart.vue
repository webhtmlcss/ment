<template>
    <div class="componentPage">
        <img src="./sister.png" width="200">
        <div>
            <div style="min-height: 200px;">
                {{msg}}
                <vue-q-art :config="config" :downloadButton="downloadButton"></vue-q-art>
            </div>
            <el-input placeholder="请输入您的网址" style="width: 200px;" clearable size="mini" type="text" v-model="config.value"></el-input>
        </div>
    </div>
</template>

<script>
    import VueQArt from './vue-qart.vue';
    // import VueQArt from 'vue-qart'
    export default {
        components: {
            VueQArt,
        },
        data () {
            return {
                downloadButton: false,
                msg: '二维码哪去了',
                config: {
                    value: 'https://www.baidu.com',
                    imagePath: './sister.png',
                    filter: "color",
                    size: 200
                },
            }
        }
    }
</script>

<style>
</style>