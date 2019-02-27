import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/',
      component: () => import('./layout/Layout.vue'),
      children: [
        {
          path: 'about',
          component: () => import('./views/About.vue')
        }
      ]
    }
  ]
})
