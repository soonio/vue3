import { createRouter, createWebHashHistory } from 'vue-router'

import LayLout from '@/layout/index'

const routes = [
  {
    path: '/',
    component: LayLout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      { path: '/mode', component: () => import('@/views/Mode') },
      { path: '/template', component: () => import('@/views/Template') },
      { path: '/article', component: () => import('@/views/Article') }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  { path: '/:pathMatch(.*)', name: '404', component: () => import('@/views/NoFound') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
