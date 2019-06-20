<!-- 树形结构 -->
<template>
    <ul class="level">
        <li v-for="(item,index) in menu" :key="index">
            <div class="rel" @click="item.expand = item.expand ? false : true">
                <router-link :to="item.url">{{item.name}}</router-link>
            </div>
            <div class="rel-chileren" v-show="item.expand === true" v-for="(i,index) in item.children" :key="index">
                <router-link :to="i.url">{{i.name}}</router-link>
            </div>
        </li>
    </ul>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'sidebar',
    data() {
        return {
            menu: [{
                name: 'Demo列表',
                url: '',
                expand: false,
                children: [
                    {
                        name: '笑话列表',
                        url: '/home'
                    },
                    {
                        name: '老黄历查吉凶',
                        url: '/date'
                    },
                    {
                        name: '驾照题库',
                        url: '/car'
                    },
                    {
                        name: '二维码',
                        url: '/chart'
                    },
                    {
                        name: '新华字典',
                        url: '/dictionary'
                    },
                    {
                        name: '邮箱',
                        url: '/email'
                    }
                ]
            }]
        }
    },
    methods: {
    }

}
</script>
<style scoped>
ul{
    padding:0;
    margin: 0;
}
li a {
    display: block;
    height: 40px;
    line-height: 40px;
    text-decoration: none;
    padding-left: 40px;
    color: #999;
}

.router-link-active {
    /*background: #4b4b4b;*/
}

.level>li>div.rel>a {
    /*    position: relative;
    vertical-align: center;*/
    color: #fff;
    font-size: 14px;
    border-bottom: 1px solid #000;
    border-top: 1px solid #000;
    margin-top: -1px;
}

.level>li>div.rel-chileren>a {
    background: transparent;
    padding-left: 60px;
}

.icon-folder {
    margin-top: 13px;
    margin-left: -29px;
    margin-right: 13px;
    float: left;
    fill: #fff;
}

.icon-moreunfold {
    position: absolute;
    right: 10px;
    top: 15px;
    fill: #fff;
}

.icon-moreunfold.fold {
    transform: rotate(270deg);
}

.router-link-exact-active {
    background: #515151;
    color: #fff;
}

/*a:hover .title {
    display: block;
}*/

.title {
    width: 120px;
}

.mini .title {
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    position: absolute;
    display: none;
    text-align: center;
}
</style>
