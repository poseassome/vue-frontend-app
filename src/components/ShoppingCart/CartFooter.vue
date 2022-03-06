<template>
  <div class="fixed left-0 bottom-0 mb-16 w-full px-5 bg-white">
    <p class="text-xl font-bold">
      <slot name="AllProductPrice"></slot>원
    </p>
    <button
    class="block w-full font-bold py-2 px-4 rounded text-white bg-sky-700 my-2">주문하기</button>
  </div>
</template>
<script>
export default {
  name: 'CartFooter',
};
</script>
