/*
 * @Descripttion:
 * @Author: LongWeiYi
 * @Date: 2021-07-15 17:36:50
 * @LastEditors: LWY😊
 * @LastEditTime: 2021-07-21 14:03:29
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeLayout from '../layout/HomeLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: HomeLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/section',
        name: 'Section',
        component: () => import(/* webpackChunkName: "Section" */ '../views/Section/Section.vue')
      },
      {
        path: '/works',
        name: 'Works',
        component: () => import(/* webpackChunkName: "Works" */ '../views/Works/Works.vue')
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "Test" */ '../views/Test/Test.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
