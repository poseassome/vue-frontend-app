<template>
  <div id="productlist" class="container mx-auto mt-5" data-test="product-type">
    <h1 class="h-10 leading-10 text-2xl">{{ category }}</h1>
    <ul class="px-5">
      <li v-for="product in response.products" :key="product.productNo" class="my-2"
       data-test="product-item">
        <router-link :to="productLink(product.productNo)">
          <div class="grid grid-cols-3">
            <p class="rounded-full overflow-hidden w-24 h-24">
              <img v-bind:src="product.imgUrl" alt='음료 이미지'
              class="h-full" data-test="product-img">
            </p>
            <div class="col-span-2 text-left">
              <p class="font-bold text-xl" data-test="product-name">{{ product.nameKr }}
                <span v-if='product.isNewProduct==true' data-test="NewProduct"
                class="text-green-700 text-sm align-super">New</span>
                <span v-if='product.isHot==true' data-test="PopukarProduct"
                class="text-red-700 text-sm align-super">Hot</span>
              </p>
              <p data-test="product-nameEn">{{ product.nameEng }}</p>
              <p data-test="product-price">{{ comma(product.price) }}원</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import RepositoryFactory from '@/api/RepositoryFactory';

const ProductApi = RepositoryFactory.get('products');

export default {
  name: 'ProductList',
  data() {
    return {
      category: '에스프레소',
      response: {
        products: [],
      },
    };
  },
  async created() {
    const productApi = new ProductApi(this.apiClient);
    this.response = await productApi.getProductList();
  },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    productLink(productNo) {
      return `/productorder/${productNo}`;
    },
  },
};
</script>
