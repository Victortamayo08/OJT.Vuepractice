import Vue from 'vue'
import Router from 'vue-router'
//import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import Header from './Quiz/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Header',
      name: 'Header.vue',
      component: Header
    },
    {
      path: '/page2',
      name: 'page2.vue',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "page2" */ './components/page2.vue')
    }
  ]
})
