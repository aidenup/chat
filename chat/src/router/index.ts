import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/pages/Login.vue')
  },
  {
    path: "/layout",
    component: ()=> import('@/pages/Layout.vue')
  },
  {
    path: '/home',
    component: ()=> import("@/pages/Home.vue")
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router