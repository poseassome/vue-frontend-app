<template>
  <div>
    <h2 class="optionbtn">사이즈</h2>
    <p class="grid grid-cols-4 gap-1">
      <button type="button"
      v-for="size in cupSize" :key="size.optionId"
      class="block h-20 bg-white border border-black-100 rounded-md py-3
      flex flex-col justify-between" :class="cupSizeClass(size.optionNo)"
      @click="changeSize(size.optionNo)">
        <span class="h-8 w-full align-center">
          <i class="fa-solid fa-mug-saucer align-middle" :class="size.iconSize"></i>
        </span>
        <span class="w-full align-center">{{ size.name }}</span>
      </button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProductSize',
  emits: ['cup-size'],
  props: {
    cupSize: {
      type: Array,
      default() {
        return [
          {
            optionNo: -1,
            name: '',
            iconSize: '',
          },
        ];
      },
    },
    selectedCupSize: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    changeSize(value) {
      this.$emit('cup-size', value);
    },
    cupSizeClass(optionId) {
      const isSelected = this.selectedCupSize === optionId;
      return {
        'option-selection': isSelected,
      };
    },
  },
};
</script>

<style scoped>
.option-selection {
  @apply bg-green-400 border-green-400 text-white;
}
</style>
