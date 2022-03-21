<template>
  <div id="shoppingcart" class="container mx-auto mt-5 relative px-5">
    <CartHeader />
    <ul class="overflow-y-scroll cartlist">
      <li v-for="(item, index) in cart" :key="item.product.productNo"
      class="my-2 border-2 border-sky-700 rounded-md relative p-2" data-test="addProduct-list">
        <ProductItem :productmenu='item' :idx='index'
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
        총 결제 금액 {{ AllProductPrice }}
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
    };
  },
  created() {
    this.CartList();
  },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    async CartList() {
      const cartApi = new CartApi(this.apiClient);
      const response = await cartApi.getCartList();
      this.cart = response.cart;
    },
    // deleteList(index) {
    // response.cart.splice(index, 1);
    // this.cart = response;
    // const listNo = this.productmenus.find((product) => product.listNo === index);
    // const idx = this.cart.indexOf(index);
    // this.cart.splice(index, 1);
    // },
    async changeItemCount(val) {
      const { idx, num } = val;
      if ((num < 0 && this.cart[idx].quantity > 1)
      || (num > 0 && this.cart[idx].quantity < 10)) {
        this.cart[idx].quantity += num;
      }
    },
    TotalPrice(idx) {
      const item = this.cart;
      const productPrice = item[idx].product.price;
      let optionPrice = 0;
      for (let i = 0; i < item[idx].optionsInfo.length; i += 1) {
        const UnitPrice = item[idx].optionsInfo[i].unitprice;
        const UnitQuantity = item[idx].options[i].quantity - item[idx].optionsInfo[i].baseQuantity;
        optionPrice += UnitPrice * UnitQuantity;
      }
      return this.comma((productPrice + optionPrice) * item[idx].quantity);
    },
  },
  computed: {
    AllProductPrice() {
      const items = this.cart;
      let total = 0;
      items.forEach((value) => {
        const idx = items.indexOf(value);
        total += Number(this.TotalPrice(idx).split(',').join(''));
      });
      return this.comma(total);
    },
  },
};
</script>

<style scoped>
  .cartlist {
    height: 450px;
  }
</style>
