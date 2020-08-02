/**
 * Created by zhangxiaoqing on 2017/7/19.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import data from './data'
import menu from './menu'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        data,
        menu
    },
    state: {},
    mutations: {},
    actions: {}
});

export default store