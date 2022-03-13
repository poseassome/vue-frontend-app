<template>
  <div id='Product-order-detail' class="container mx-auto mt-5 relative px-5">
    <ProductDetail :product="product">
      <template v-slot:eachprice>
        {{ comma(product.price) }}
      </template>
    </ProductDetail>
    <form>
      <ProductTemp :selected-temperature="order.temperature" @temperature="changeTemperature" />
      <ProductSize :cupSize="product.cupSizes" :selected-cup-size="order.cupSize"
      @cup-size="changeCupSize" />
      <ProductCup :selected-cup-type="order.cupType" @cup-type="changeCupType" />
      <h2 class="optionbtn">퍼스널 옵션</h2>
      <ProductOptions :personalOption="option" @option="changeOption"
      v-for="option in product.options" :key="option.optionNo">
        <template v-slot:optionQuantity>
          {{ optionQuantity(option.optionNo) }}
        </template>
      </ProductOptions>
      <ProductFooter @quantity="changeQuantity" @cart="addCart" @order="orderInstantly">
        <template v-slot:totalCount>
          {{ order.quantity }}
        </template>
        <template v-slot:totalPrice>
          {{ totalPrice }}
        </template>
      </ProductFooter>
    </form>
  </div>
</template>

<script>
import ProductDetail from '@/components/Product/ProductDetail.vue';
import ProductTemp from '@/components/Product/ProductTemp.vue';
import ProductSize from '@/components/Product/ProductSize.vue';
import ProductCup from '@/components/Product/ProductCup.vue';
import ProductOptions from '@/components/Product/ProductOptions.vue';
import ProductFooter from '@/components/Product/ProductFooter.vue';

import ProductApi from '@/api/Repositories/ProductListRepository';
import CartApi from '@/api/Repositories/ShoppingCartRepository';

export default {
  name: 'ProductOrder',
  components: {
    ProductDetail,
    ProductTemp,
    ProductSize,
    ProductCup,
    ProductOptions,
    ProductFooter,
  },
  data() {
    return {
      product: {
        productNo: -1,
        nameKr: '',
        description: '',
        isBest: false,
        imageUrl: '',
        price: -1,
        category: 1,
        options: [],
        cupSizes: [],
      },
      order: {
        quantity: 1,
        cupSize: 1,
        cupType: 'MALL',
        temperature: 'HOT',
        options: [],
      },
    };
  },
  async created() {
    await this.getProductInfo();
  },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    async getProductInfo() {
      const { productNo } = this.$route.params;
      const productApi = new ProductApi(this.apiClient);
      const response = await productApi.getProductInfo(productNo);
      this.product = response.product;
      this.backFillOrderOptions();
    },
    async addCart() {
      let orderInfo = this.order;
      const cartApi = new CartApi(this.apiClient);
      orderInfo = Object.assign(orderInfo, { productNo: this.product.productNo });

      await cartApi.addCart(orderInfo);
      // eslint-disable-next-line no-alert
      alert('장바구니에 담겼습니다');
      await this.$router.push('/products');
    },
    backFillOrderOptions() {
      const optionsLength = this.product.options.length;
      for (let i = 0; i < optionsLength; i += 1) {
        const currentOption = this.product.options[i];
        this.order.options.push({
          optionNo: currentOption.optionNo,
          quantity: currentOption.baseQuantity,
        });
      }
      this.order.cupSize = this.product.cupSizes[0].optionId;
    },
    changeTemperature(temperature) {
      this.order.temperature = temperature;
    },
    changeCupSize(size) {
      this.order.cupSize = size;
    },
    changeCupType(type) {
      this.order.cupType = type;
    },
    optionQuantity(optionNo) {
      return this.order.options.find((option) => option.optionNo === optionNo).quantity;
    },
    isOptionChangeable(orderOptionIndex, productOptionIndex, increment) {
      const currentQuantity = this.order.options[orderOptionIndex].quantity;
      const { baseQuantity } = this.product.options[productOptionIndex];
      return increment > 0 || (increment < 0 && currentQuantity > baseQuantity);
    },
    changeOption(val) {
      const { optionNo, delta } = val;
      console.log(val);
      const orderOptionIndex = this.order.options.findIndex(
        (option) => option.optionNo === optionNo,
      );
      const productOptionIndex = this.product.options.findIndex(
        (option) => option.optionNo === optionNo,
      );
      if (this.isOptionChangeable(orderOptionIndex, productOptionIndex, delta)) {
        this.order.options[orderOptionIndex].quantity += delta;
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
      for (let i = 0; i < this.product.options.length; i += 1) {
        const currentOption = this.product.options[i];
        const currentOrder = this.findOptionInOrder(currentOption.optionNo);
        if (currentOrder !== undefined) {
          totalOptionPrice
            += (currentOrder.quantity - currentOption.baseQuantity) * currentOption.unitprice;
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
