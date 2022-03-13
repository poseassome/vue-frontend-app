<template>
  <div>
    <button @click="back()" class="detailbtn absolute left-0 top-0 ml-4">
      <i class="fa-solid fa-angle-left text-white"></i>
    </button>
    <button class="detailbtn float-right absolute right-0 top-0 mr-4">
      <i class="fa-solid fa-share text-white"></i>
    </button>
    <img :src='product.imgUrl' alt="음료 이미지">
    <h1 class="font-bold h-10 leading-10 text-2xl mt-2 text-left">
      {{ product.nameKr }}
      <span v-if="product.isHot" class="text-sm text-red-600 align-super">Best</span>
    </h1>
    <p class="text-sm text-left">{{ product.description }}</p>
    <p class="font-bold text-left text-xl mt-3">
      <slot name="eachprice"></slot>원
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    product: {
      type: Object,
      default() {
        return {
          nameKr: '',
          price: -1,
          description: '',
          isHot: false,
          imgUrl: '',
        };
      },
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
