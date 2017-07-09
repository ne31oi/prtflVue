import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'

import Home from '../views/home/home'
import Portfolio from '../views/portfolio/portfolio'
import Skills from '../views/skills/skills'
import Contact from '../views/contact/contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      component: Hello
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
