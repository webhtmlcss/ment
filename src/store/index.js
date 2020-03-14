/**
 * Created by zhangxiaoqing on 2017/7/19.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import data from './data'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        data
    },
    state: {},
    mutations: {},
    actions: {}
});

export default store