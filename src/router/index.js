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
const Detail = () => import('../views/detail/Detail')


export default new VueRouter({
  routes: [{
      path: '/home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        keepAlive: false
      }
    }, {
      path: '/detail',
      component: Detail,
      meta: {
        keepAlive: false
      }
    }
  ],
  mode: 'history'
})
