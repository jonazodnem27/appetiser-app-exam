import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Verify from '../views/Verify.vue'
import MyAccount from '../views/MyAccount.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
   {
    path: '/verify',
    name: 'Verify',
    component: Verify
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
