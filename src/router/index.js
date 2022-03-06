import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductOrder from '@/views/ProductOrder.vue';
import ProductList from '@/views/ProductList.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';
import AppSetting from '@/views/AppSetting.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Products',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/productorder',
    name: 'ProductOrder',
    component: ProductOrder,
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: ShoppingCart,
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
