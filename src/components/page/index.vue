<template>
    <div id="portal">
        <div class="top" >
            <span class="top-name">这是一些小Demo</span>
            <div style="float:right;width:auto">
                <div class="userImg"><img :src='userLogo'></div>
                <ul class="top-user clearfix">
                    <li class="user-more">
                        <a href="javascript:;">{{ userName }}</a>
                        <ul>
                            <li><a :href="setting">个人设置</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main">
            <div class="left">
                <sidebar></sidebar>
            </div>
            <div class="content">
                <router-view class="aaaaaaa"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import sidebar from './sidebar'
// import iconSvg from '@components/icon-svg'

let config={}

export default {
    name: 'portal',
    data() {
        return {
            userLogo: '../../../static/qqImg.jpg',  //当前登录头像
            userName: '放学别走',  //当前登录用户名
            setting: config.settingURL,  //个人设置URL
        }
    },
    components: {
        sidebar,
    },
    methods: {
    }
}
</script>
<style scoped>

.iframe .top,.iframe .left{
    display: none;
}

.iframe .content{
    padding-left: 0;
    padding-top: 0;
}

.top {
    height: 55px;
    background: #4f94e7;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0 1px 2px #b2b2b2;
}

.userImg{
    display:inline-block;
    vertical-align:top;
}

.userImg img{
    width:50px;
    height:50px;
    border-radius:50%;
    margin-top:2px;
}

.content {
    position: static;
    padding-top: 55px;
    padding-left: 200px;
    overflow: auto;
}

.mini+.content {
    left: 40px;
}

a:link,
a:visited,
a:hover,
a:active {
    text-decoration: none;
}

.logo,
.top-menu,
.top-name {
    float: left;
}

.top-menu{
	height: 55px;
	overflow: hidden;
}

.top-menu a{
	/*display: inline-block;*/
	float: left;
	height: 50px;
	padding: 5px 12px 0;
	text-align: center;
	color: #FFFFFF;
	overflow: hidden;
	/*vertical-align: middle;*/
}
.top-menu a:first-child{
	margin-left: 5px;
}
.top-menu a img{
	height: 22px;
}
.top-user{
    display:inline-block;
    list-style-type: none;
    margin: 0;
    padding-left: 0;
    vertical-align:middle;
}

.top-user>li {
    float: right;
    list-style-type: none;
}

.top-user {
    padding-right: 21px;
}

.top-user>li:hover{
    background: #4b8ad8;
}

.top-user .user-more{
	width: 100px;
}

.top-user .user-more ul {
    background: #FFFFFF;
    display: none;
    padding: 0;
    margin: 0;
}

.top-user .user-more ul li{
    margin: 0;
    padding: 0;
}

.top-user .user-more:hover ul {
    display: block;
    border:1px solid #E6E6E6;
    list-style-type: none;
}

.top-user .user-more ul li a{
	display: block;
	cursor: pointer;
	color: #000000;
}

.top-user .user-more ul li:hover{
	background: #e6e6e6;

}
.logo {
    padding: 12px 0 0 18px;
}

.top-name {
    font-size: 18px;
    font-family: "黑体";
    display: block;
    color: #FFFFFF;
    line-height: 50px;
    padding: 0 18px;
}

.top-menu li:hover {
    background: #4b8ad8;
    box-shadow: 3px 0 3px #426996, -3px 0 3px #426996;
}

.top-menu .router-link-active {
    background: #4b8ad8;
    box-shadow: 3px 0 3px #426996, -3px 0 3px #426996;
}

.top-menu li a,
.top-user li>a {
    height: 100%;
    text-align: center;
    height: 55px;
    line-height: 55px;
    padding: 0 11px;
    color: #FFFFFF;
}


.left {
    width: 200px;
    background: #333333;
    color: #fff;
    position: fixed;
    left: 0;
    top: 55px;
    bottom: 0;
    overflow-y: auto;
}

.mini {
    width: 40px;
}
.mini svg{
	transform: rotate(180deg);
}
.left .toHidden {
    position: absolute;
    width: 200px;
    height: 40px;
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
}

.mini .toHidden{
	width: 40px;
}

.left .toHidden .toHidden-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    background: #666666;
    border-radius: 3px;
    cursor: pointer;
}
.left .toHidden .toHidden-btn {
	transform: rotate(90deg);
}
.clearfix:after {
    content: '';
    display: block;
    clear: both;
}
.level-1{
	padding-top: 42px;
}
@media only screen and (max-width: 1500px) {
	.top-menu a{
		padding: 5px 3px 0;
	}
}
.top-menu-icon svg{
	fill: #FFFFFF;
}
</style>
