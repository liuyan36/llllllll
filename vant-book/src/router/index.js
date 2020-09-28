import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/search.vue'
import HomeZuire from '../views/Home/Home-zuire.vue'
import HomeHaoping from '../views/Home/Home-haoping.vue'
import HomeResou from '../views/Home/Home-resou.vue'
import HomeQianli from '../views/Home/Home-qianli.vue'
import HomeLiucun from '../views/Home/Home-liucun.vue'
import HomeVip from '../views/Home/Home-vip.vue'
import HomeShengdan from '../views/Home/Home-shengdan.vue'

import HomeBaidu from '../views/Home/Home-baidu.vue'
import HomeZhangyue from '../views/Home/Home-zhangyue.vue'
import HomeShuqi from '../views/Home/Home-shuqi.vue'
import HomeYiqik from '../views/Home/Home-yiqik.vue'
import HomeQidian from '../views/Home/Home-qidian.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/zuire',
        component: HomeZuire
      },
      {
        path: '/home/haoping',
        component: HomeHaoping
      },
      {
        path: '/home/resou',
        component: HomeResou
      },
      {
        path: '/home/qianli',
        component: HomeQianli
      },
      {
        path: '/home/liucun',
        component: HomeLiucun
      },
      {
        path: '/home/vip',
        component: HomeVip
      },
      {
        path: '/home/shengdan',
        component: HomeShengdan
      },

      {
        path: '/home/baidu',
        component: HomeBaidu
      },
      {
        path: '/home/zhangyue',
        component: HomeZhangyue
      },
      {
        path: '/home/shuqi',
        component: HomeShuqi
      },
      {
        path: '/home/yiqik',
        component: HomeYiqik
      },
      {
        path: '/home/qidian',
        component: HomeQidian
      },
      {
        path: '',
        redirect: '/home/zuire'
      }
    ]
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
