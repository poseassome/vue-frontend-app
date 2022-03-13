<template>
  <div id="productlist" class="container mx-auto mt-5" data-test="product-type">
    <ProductItem />
  </div>
</template>
<script>
import ProductItem from '@/components/ProductList/ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
};
</script>
