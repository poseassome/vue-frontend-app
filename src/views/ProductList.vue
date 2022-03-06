<template>
  <div id="productlist" class="container mx-auto mt-5" data-test="product-type">
    <ProductItem :products='products' />
  </div>
</template>
<script>
import ProductItem from '@/components/ProductList/ProductItem.vue';
import RepositoryFactory from '@/api/RepositoryFactory';

const { getProduct } = RepositoryFactory.get('products');

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  data() {
    return {
      products: {},
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    async getItem() {
      const product = await getProduct();
      const { data } = product;
      this.products = data.products;
      console.log(data.products);
      // this.$router.replace('productorder');
    },
  },
};
</script>
