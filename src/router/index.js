import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
// import Home from 'views/home/Home'
// import Cart from 'views/cart/Cart'
// import Category from 'views/category/Category'
// import Profile from 'views/profile/Profile'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')


export default new VueRouter({
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
