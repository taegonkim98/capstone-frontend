import Vue from 'vue'
import VueRouter from 'vue-router'
import Groups from "../views/Groups.vue"
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue"
import Logout from "../views/Logout.vue"
import Home from "../views/Home.vue"
import joinedGroups from "../views/joinedGroups.vue"
import createGroup from "../views/createGroup.vue"
import groupsShow from "../views/GroupsShow.vue"
import signupConfirmation from "../views/SignupConfirmation.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/groups',
    name: 'groups',
    component: Groups
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: '/myGroups',
    component: joinedGroups
  },
  {
    path: '/groups/new',
    component: createGroup
  },
  {
    path: '/groups/:id',
    component: groupsShow
  },
  {
    path: '/signupConfirmation',
    component: signupConfirmation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
