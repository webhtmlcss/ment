/**
 * Created by zhangxiaoqing on 2017/7/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    state: {
        aaa:'asdasdasdasd'
    },
    getters:{
        getData: function (state) {
            return state.aaa + 'xxx'
        }
    },
    actions,
    strict: debug,
    plugins: []
})

export default store