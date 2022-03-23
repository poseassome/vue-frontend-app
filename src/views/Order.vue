<template>
  <div id="order-page" class="container mx-auto mt-5 relative px-5">
     <h1 class="h-10 leading-10 text-2xl" data-test="shoppingcart">결제하기</h1>
      <button @click="back()" class="detailbtn absolute left-5 top-0">
        <i class="fa-solid fa-angle-left text-white"></i>
      </button>
     <div class="py-4 text-xl">{{ firstProductNameAndQuantity }}</div>
     <p>{{ totalPriceLocaleString }}</p>
     <div class="grid grid-cols-1 content-center gap-2 py-4">
       <div class="payment-method bg-green-200">
         <div class="shrink-0">
           <i class="fa-solid fa-credit-card text-2xl"></i>
         </div>
         <div>
           <div class="text-xl font-medium text-black">현장 결제</div>
           <p>현장에서 직접 결제를 합니다.</p>
         </div>
       </div>
       <div class="payment-method bg-yellow-200">
         <div class="shrink-0">
           <i class="fa-solid fa-coins text-2xl"></i>
         </div>
         <div>
           <div class="text-xl font-medium text-black">포인트 결제</div>
           <p>적립된 포인트로 결제를 합니다.</p>
         </div>
       </div>
     </div>
     <div class="grid grid-cols-1 gap-4 content-center">
       <button type="submit"
       class="block w-full font-bold py-2 px-4 rounded text-white bg-sky-700 my-2">주문하기</button>
     </div>
   </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('cart');

export default {
  name: 'OrderView',
  computed: {
    ...mapGetters(['getTotalPrice', 'getTotalCount', 'getFirstProductName']),
    firstProductNameAndQuantity() {
      return `${this.getFirstProductName} 포함 ${this.getTotalCount}잔`;
    },
    totalPriceLocaleString() {
      return `${this.getTotalPrice.toLocaleString()}원을 결제합니다.`;
    },
  },
};
</script>

<style>
.payment-method {
  @apply p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4 w-full
}
</style>
