import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/page/Layout.vue'
import Login from '@/page/Login.vue'
import PageAVue from '@/page/PageA.vue'
import PageBVue from '@/page/PageB.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: 'login'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/pageA',
    children: [
      {
        path: '/pageA',
        name: 'pageA',
        component: PageAVue
      },
      {
        path: '/pageB',
        name: 'pageB',
        component: PageBVue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next: any) => {
  // const token = localStorage.getItem('token')
  // if(!token && to.path !== '/login') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})


export default router