import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由组件,形成准备路由管理
import MSide from '../pages/MSide/MSide.vue'
import Classify from '../pages/Classify/Classify.vue'
import DiscernGoods from '../pages/DiscernGoods/DiscernGoods.vue'
import CartShop from '../pages/CartShop/CartShop.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/mside',
      component: MSide,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/disgoods',
      component: DiscernGoods,
    },
    {
      path: '/cartshop',
      component: CartShop,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/',
      redirect: '/MSide'
    }
  ]
})

export default router
