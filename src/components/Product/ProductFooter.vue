<template>
  <div>
    <h2 class="text-left font-bold mt-5 mb-1 text-2xl text-blue-800">결제금액</h2>
    <div class="mt-3 flex justify-between">
      <p class="font-bold">
        <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 mr-2"
        @click="minusCount">
          <i class="fa-solid fa-minus"></i>
        </button>
        <slot name="totalCount"></slot>
        <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
        @click="plusCount">
          <i class="fa-solid fa-plus"></i>
        </button>
      </p>
      <p class="font-bold text-2xl">
        <slot name="totalPrice"></slot>원
      </p>
    </div>
    <button type="button"
    class="font-bold py-2 px-4 rounded text-sky-700 border border-sky-700 mt-10 mr-5"
    @click="addCart">담기</button>
    <button type="button"
    class="font-bold py-2 px-4 rounded text-white bg-sky-700 mt-10"
    @click="orderInstantly">주문하기</button>
  </div>
</template>
<script>
export default {
  name: 'ProductFooter',
  emits: ['quantity', 'order', 'cart'],
  methods: {
    minusCount() {
      this.$emit('quantity', -1);
    },
    plusCount() {
      this.$emit('quantity', 1);
    },
    addCart() {
      this.$emit('cart');
    },
    orderInstantly() {
      this.$emit('order');
    },
  },
};
</script>
