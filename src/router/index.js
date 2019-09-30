import Vue from 'vue'
import Router from 'vue-router'
import index from '@components/page/index'
import home from '@components/page/home/home'
import date from '@components/page/date/date'
import car from '@components/page/car/car'
import chart from '@components/page/chart/chart'
import dictionary from '@components/page/dictionary/dictionary'
import issueList from '@components/page/issueList/issueList'
import wechart from '@components/page/wechart/weChatEmpower'
import echart from '@components/page/echart/echart'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/templets/vue/',  //添加的地方
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/date',
      component:date
    },
    {
      path: '/car',
      component: car
    },
    {
      path: '/chart',
      component: chart
    },
    {
      path: '/dictionary',
      component: dictionary
    },
    {
      path: '/issueList',
      component: issueList
    },
    {
      path: '/wechart',
      component: wechart
    },
    {
      path: '/echart',
      component: echart
    }
  ]
})
