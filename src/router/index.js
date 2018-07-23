import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/child',
      name: 'child',
      component: resolve => require(['@/components/child'], resolve) //懒加载的写法
    },
    {
      path: '/echarMap',
      name: 'echarMap',
      // component: page2
      component: resolve => require(['@/components/echarMap'], resolve) //懒加载的写法
    },
    {
      path: '/swiper',
      name: 'swiper',
      // component: page2
      component: resolve => require(['@/components/swiper'], resolve) //懒加载的写法
    },
    {
      path: '/settings',
      // name:'settings',
      component: resolve => require(['@/components/settings'], resolve),
      children:[
        {
          path:'one',
          component: resolve => require(['@/components/one'], resolve)
        },
        {
          path:'two',
          components : {
            default : resolve => require(['@/components/two'], resolve),
            helper : resolve => require(['@/components/three'], resolve),
          }
        }
      ]
    }
  ]
})
