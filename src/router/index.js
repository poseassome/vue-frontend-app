import { createWebHistory, createRouter } from 'vue-router';
import UserLogin from '../components/UserLogin.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetail from '../components/ProductDetail.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UserLogin,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductList,
  },
  {
    path: '/productdetail',
    name: 'ProductDetail',
    component: ProductDetail,
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
