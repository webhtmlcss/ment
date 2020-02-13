// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import api from '@/api/api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.css'
import echarts from 'echarts'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
import Vuex from 'Vuex';
import store from "./store";

Vue.prototype.$echarts = echarts
Vue.prototype.api = api
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(iView);
Vue.use(Vuex)

global.$eventHub=new Vue()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
