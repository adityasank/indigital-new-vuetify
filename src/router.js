import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Authentication/Login.vue'

import Register from './views/Authentication/Register.vue'

import Register1 from './views/Authentication/Register1.vue'

import Register2 from './views/Authentication/Register2.vue'

import Otp from './views/Authentication/Otp.vue'
import ForgotPassword from './views/Authentication/ForgotPassword.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  
  {
    path: '/Register1',
    name: 'Register1',
    component: Register1
  },
  {
    path: '/Register2',
    name: 'Register2',
    component: Register2
  },
  
  {
    path: '/Otp',
    name: 'Otp',
    component: Otp
  },
  
  {
    path: '/ForgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  
  

  ],
})
