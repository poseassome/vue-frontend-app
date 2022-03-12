<template>
  <div id='Product-order-detail' class="container mx-auto mt-5 relative px-5">
  <!--
    <ProductDetail :product="product">
      <template v-slot:eachprice>
        {{ comma(product.price) }}
      </template>
    </ProductDetail>
    <form>
      <ProductTemp />
      <ProductSize :cupSize="cupSize" />
      <ProductCup  />
      <h2 class="optionbtn">퍼스널 옵션</h2>
      <ProductOptions :personalOption="option" @option="changeOption"
      v-for="option in options" :key="option.optionNo">
        <template v-slot:optionQuantity>
          {{ optionQuantity(option.optionNo) }}
        </template>
      </ProductOptions>
      <ProductFooter @quantity="changeQuantity">
        <template v-slot:totalCount>
          {{ order.quantity }}
        </template>
        <template v-slot:totalPrice>
          {{ totalPrice }}
        </template>
      </ProductFooter>
    </form>
  -->
  </div>
</template>

<script>
// import ProductDetail from '@/components/Product/ProductDetail.vue';
// import ProductTemp from '@/components/Product/ProductTemp.vue';
// import ProductSize from '@/components/Product/ProductSize.vue';
// import ProductCup from '@/components/Product/ProductCup.vue';
// import ProductOptions from '@/components/Product/ProductOptions.vue';
// import ProductFooter from '@/components/Product/ProductFooter.vue';

export default {
  name: 'ProductOrder',
  components: {
    // ProductDetail,
    // ProductTemp,
    // ProductSize,
    // ProductCup,
    // ProductOptions,
    // ProductFooter,
  },
  data() {
    return {
      // product: {
      //   productNo: 1,
      //   name: '카페 라떼',
      //   description:
      //     '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 카페 라떼',
      //   isBest: true,
      //   imageUrl: 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/cappuccino.jpg',
      //   price: 5000,
      // },
      // cupSize: [
      //   {
      //     name: 'Short',
      //     icon: 'text-sm',
      //   },
      //   {
      //     name: 'Tall',
      //     icon: 'text-md',
      //   },
      //   {
      //     name: 'Grande',
      //     icon: 'text-lg',
      //   },
      //   {
      //     name: 'Venti',
      //     icon: 'text-xl',
      //   },
      // ],
      // options: [
      //   {
      //     optionNo: 1,
      //     name: '에스프레소 샷',
      //     unitPrice: 500,
      //     baseQuantity: 1,
      //   },
      //   {
      //     optionNo: 2,
      //     name: '시럽',
      //     unitPrice: 300,
      //     baseQuantity: 0,
      //   },
      // ],
      // order: {
      //   quantity: 1,
      //   cup: '',
      //   options: [
      //     {
      //       optionNo: 1,
      //       quantity: 1,
      //     },
      //     {
      //       optionNo: 2,
      //       quantity: 0,
      //     },
      //   ],
      // },
    };
  },
  created() {
    console.log(this.$route.params.productNo);
    // this.getItem();
  },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    optionQuantity(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo).quantity;
    },
    isOptionChangeable(optionIndex, num) {
      const currentQuantity = this.order.options[optionIndex].quantity;
      const { baseQuantity } = this.options[optionIndex];
      return num > 0 || (num < 0 && currentQuantity > baseQuantity);
    },
    changeOption(val) {
      const { optionNo, num } = val;
      const optionIndex = this.order.options.findIndex(
        (option) => option.optionNo === optionNo,
      );
      if (this.isOptionChangeable(optionIndex, num)) {
        this.order.options[optionIndex].quantity += num;
      }
    },
    isQuantityChangeable(num) {
      return num > 0 || (num < 0 && this.order.quantity > 1);
    },
    changeQuantity(val) {
      if (this.isQuantityChangeable(val)) {
        this.order.quantity += val;
      }
    },
    findOptionInOrder(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo);
    },
  },
  computed: {
    optionPrice() {
      let totalOptionPrice = 0;
      for (let i = 0; i < this.options.length; i += 1) {
        const currentOption = this.options[i];
        const currentOrder = this.findOptionInOrder(currentOption.optionNo);
        if (currentOrder !== undefined) {
          totalOptionPrice
            += (currentOrder.quantity - currentOption.baseQuantity) * currentOption.unitPrice;
        }
      }
      return totalOptionPrice;
    },
    totalPrice() {
      return this.comma((this.product.price + this.optionPrice) * this.order.quantity);
    },
  },
};
</script>
