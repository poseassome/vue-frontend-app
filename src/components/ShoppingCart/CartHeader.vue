<template>
  <div class="relative">
    <h1 class="h-10 leading-10 text-2xl" data-test="shoppingcart">장바구니</h1>
    <button @click="back()" class="detailbtn absolute left-0 top-0">
      <i class="fa-solid fa-angle-left text-white"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: 'AddList',
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
