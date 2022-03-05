import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import ProductOrder from '@/views/ProductOrder.vue';
import ProductList from '@/components/ProductList.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
