import Vue from 'vue';
import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter);
// 导入 让路由管理的组件
import index from '../components/index.vue'
import cart from '../components/cart.vue'



// 写规则
let routes = [
  {
    path: '/',
    redirect: '/index'
  },
  // {
  //   path: '/',
  //   component: index
  // },
  {
    path: '/index',
    component: index
  },
  {
    path: '/cart',
    component: cart
  },
]

// 实例化
let router = new VueRouter({
  routes
})

// 导入
export default router;