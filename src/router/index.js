import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductOrder from '@/views/ProductOrder.vue';
import ProductList from '@/views/ProductList.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';
import OrderView from '@/views/Order.vue';
import AppSetting from '@/views/AppSetting.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/productorder/:productNo',
    name: 'ProductOrder',
    component: ProductOrder,
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
  {
    path: '/order',
    name: 'OrderView',
    component: OrderView,
  },
  {
    path: '/setting',
    name: 'AppSetting',
    component: AppSetting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
