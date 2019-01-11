import Vue from 'vue'
import Router from 'vue-router'
import index from '@components/page/index'
import home from '@components/page/home/home'
import date from '@components/page/date/date'
import car from '@components/page/car/car'
import chart from '@components/page/chart/chart'

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
    }
  ]
})
