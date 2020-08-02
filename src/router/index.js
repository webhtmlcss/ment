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
import iviewTimer from '@components/page/iview/timer'
import screen from '@components/page/screen/index'
import diqu from '@components/page/diqu/diqu'
import tree from '@components/page/tree/tree'
import jgfz from '@components/page/jgfz/jgfz'
import session from '@components/page/session/session'
import psList from '@components/page/dgzf/psList'
import add from '@components/page/dgzf/add'


Vue.use(Router)

const routes = [
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
    },
    {
      path: '/timer',
      component: iviewTimer
    },
    {
      path: '/screen',
      component: screen
    },
    {
      path: '/diqu',
      component: diqu
    },
    {
      path: '/tree',
      component: tree
    },
    {
      path: '/jgfz',
      component: jgfz
    },
    {
      path: '/session',
      component: session
    },
    {
      path: '/psList',
      component: psList
    },
    {
      path: '/add',
      component: add
    }
  ]

const router = new Router({
  mode: 'history',
  // base: '/templets/vue/',  //添加的地方
  routes 
})

export default router
