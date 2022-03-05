<template>
  <div>
    <h2 class="optionbtn">사이즈</h2>
    <p class="grid grid-cols-4 gap-1">
      <label for="size"
      v-for="size in cupSize" :key="size.name"
      class="block h-20 bg-white border border-black-100 rounded-md py-3
      flex flex-col justify-between
      hover:bg-sky-700 hover:text-white">
        <span class="h-8">
          <i class="fa-solid fa-mug-saucer align-middle" :class="size.icon"></i>
        </span>
        <span>{{ size.name }}</span>
        <input type="radio" id="size" name="size" class="hidden">
      </label>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProductSize',
  props: {
    cupSize: {
      type: Array,
      default() {
        return [
          {
            name: '',
            icon: '',
          },
        ];
      },
    },
  },
};
</script>
