<template>
  <div>
    <h2 class="optionbtn">컵 선택</h2>
    <p class="grid grid-cols-3">
      <label for="temp"
      class="block rounded-l-full bg-white border border-black-100 h-10 leading-10
      hover:bg-sky-700 hover:text-white">매장컵
        <input type="radio" id="temp" name="temp" class="hidden">
      </label>
      <label for="temp"
      class="block bg-white border border-black-100 h-10 leading-10
      hover:bg-sky-700 hover:text-white">개인컵
        <input type="radio" id="temp" name="temp" class="hidden">
      </label>
      <label for="temp"
      class="block rounded-r-full bg-white border border-black-100 h-10 leading-10
      hover:bg-sky-700 hover:text-white">일회용컵
        <input type="radio" id="temp" name="temp" class="hidden">
      </label>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProductCup',
};
</script>
