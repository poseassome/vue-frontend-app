<template>
  <div id="shoppingcart" class="container mx-auto mt-5 relative px-5">
    <CartHeader />
    <ul>
      <li v-for="item in cart" :key="item.product.productNo"
      class="my-2 border-2 border-sky-700 rounded-md relative p-2" data-test="addProduct-list">
        <ProductItem :productmenu='item'
        @delete='deleteList' @change='changeItemCount'>
          <template v-slot:productCount>
            {{ item.quantity }}
          </template>
          <template v-slot:productPrice>
            {{ TotalPrice(index) }}
          </template>
        </ProductItem>
      </li>
    </ul>
    <CartFooter>
      <template v-slot:AllProductPrice>
        {{ AllProductPrice }}
      </template>
    </CartFooter>
  </div>
</template>
<script>
import CartHeader from '@/components/ShoppingCart/CartHeader.vue';
import ProductItem from '@/components/ShoppingCart/ProductItem.vue';
import CartFooter from '@/components/ShoppingCart/CartFooter.vue';

import CartApi from '@/api/Repositories/ShoppingCartRepository';

export default {
  name: 'ShoppingCart',
  components: {
    CartHeader,
    ProductItem,
    CartFooter,
  },
  data() {
    return {
      cart: [],
      // productmenus: [
      //   {
      //     listNo: 1,
      //     thumbnail: 'http://img.segye.com/content/image/2020/01/30/20200130516148.jpg',
      //     name: '아메리카노',
      //     nameEn: 'Americano',
      //     temp: 'ICE',
      //     size: 'Tall',
      //     cuptype: '일회용컵',
      //     personaloption: '에스프레소 샷 2',
      //     count: 1,
      //     price: 4500,
      //   },
      //   {
      //     listNo: 2,
      //     thumbnail: 'https://w.namu.la/s/45d06e347239fc7e2b3c3b57cfe8a5de7709ecd6fa71a4c025753384b1f8aec02c07b8f16ec410f815ed144f9bfe4cd2ac98c5a7fc1e5b8877b1c856ab941ce1163056e98d68880c5c2df4b790708aa2c35cf4f214ed5be4ea474dec2871f356',
      //     name: '카페라떼',
      //     nameEn: 'Cafe Latte',
      //     temp: 'ICE',
      //     size: 'Tall',
      //     cuptype: '일회용컵',
      //     personaloption: '에스프레소 샷 1',
      //     count: 2,
      //     price: 5000,
      //   },
      // ],
    };
  },
  created() {
    this.getCartList();
  },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    async getCartList() {
      const cartApi = new CartApi(this.apiClient);
      const response = await cartApi.getCartList();
      this.cart = response.cart;
    },
    deleteList(index) {
      const listNo = this.productmenus.find((product) => product.listNo === index);
      const idx = this.productmenus.indexOf(listNo);
      this.productmenus.splice(idx, 1);
    },
    changeItemCount(val) {
      const { listNo, num } = val;
      const productNo = this.productmenus.findIndex((product) => product.listNo === listNo);
      if ((num < 0 && this.productmenus[productNo].count > 1)
      || (num > 0 && this.productmenus[productNo].count < 10)) {
        this.productmenus[productNo].count += num;
      }
    },
    // TotalPrice(idx) {
    //   const totalprice = this.productmenus[idx].count * this.productmenus[idx].price;
    //   return this.comma(totalprice);
    // },
  },
  computed: {
    // AllProductPrice() {
    //   const items = this.productmenus;
    //   let total = 0;
    //   items.forEach((value) => {
    //     const num = Number(value.price) * Number(value.count);
    //     total += num;
    //   });
    //   return this.comma(total);
    // },
  },
};
</script>
