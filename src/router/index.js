import Vue from 'vue'
import VueRouter from 'vue-router'
import storeAuth from "../store/Auth";
import Auth from "@/router/Auth";
import User from '@/router/User';
import Mod from "@/router/Mod";
import Home from "@/router/Home";


Vue.use(VueRouter)

const routes = [
  Auth,
  User,
  Mod,
  Home
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!storeAuth.state.authentication) {
      // next({ path: '/auth/login' })
      next()
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
