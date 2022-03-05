<template>
  <div>
    <p class="grid grid-cols-2 mt-5">
      <label for="temp"
      class="block rounded-l-full bg-white border border-black-100 h-10 leading-10
      hover:bg-red-700 hover:text-white">HOT
        <input type="radio" id="temp" name="temp" class="hidden">
      </label>
      <label for="temp"
      class="block rounded-r-full bg-white border border-black-100 h-10 leading-10
      hover:bg-sky-700 hover:text-white">ICE
        <input type="radio" id="temp" name="temp" class="hidden">
      </label>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProductTemp',
};
</script>
