import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import home from '@/components/page/home/home'
import date from '@/components/page/date/date'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/date',
      name: 'date',
      component: date
    }
  ]
})
