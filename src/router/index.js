import Vue from 'vue'
import VueRouter from 'vue-router'
//引入组件
import Home from 'views/home/Home'
import Cart from 'views/cart/Cart'
import Category from 'views/category/Category'
import Profile from 'views/profile/Profile'
Vue.use(VueRouter)

const routers = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/profile',
  component: Profile
}]

export default new VueRouter({
  routers,
  history
})
