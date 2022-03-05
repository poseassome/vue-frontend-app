<template>
  <div>
    <button @click="back()" class="detailbtn absolute left-0 top-0 ml-4">
      <i class="fa-solid fa-angle-left text-white"></i>
    </button>
    <button class="detailbtn float-right absolute right-0 top-0 mr-4">
      <i class="fa-solid fa-share text-white"></i>
    </button>
    <img :src='product.imageUrl' alt="음료 이미지">
    <h1 class="font-bold h-10 leading-10 text-2xl mt-2 text-left">
      {{ product.name }}
      <span v-if="product.isBest" class="text-sm text-red-600 align-super">Best</span>
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
  emits: ['comma'],
  props: {
    product: {
      type: Object,
      default() {
        return {
          name: '',
          price: -1,
          description: '',
          isBest: false,
          imageUrl: '',
        };
      },
    },
  },
  // data() {
  //   return {
  //     cupsizes: [
  //       {
  //         size: 'Short',
  //         price: 4000,
  //       },
  //       {
  //         size: 'Tall',
  //         price: 4500,
  //       },
  //       {
  //         size: 'Grande',
  //         price: 5000,
  //       },
  //       {
  //         size: 'Venti',
  //         price: 5500,
  //       },
  //     ],
  //     personaloption: {
  //       title: '에스프레소 샷',
  //       count: 1,
  //       price: 600,
  //     },
  //     totalcount: {
  //       count: 1,
  //       price: this.$route.query.price,
  //     },
  //   };
  // },
  // computed: {
  //   TotalPrice() {
  //     const personaloptionPrice = this.personaloption.price * (this.personaloption.count - 1);
  //     return (Number(this.totalcount.price) + personaloptionPrice) * this.totalcount.count;
  //   },
  // },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
