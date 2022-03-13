<template>
  <div>
    <h2 class="optionbtn">컵 선택</h2>
    <p class="grid grid-cols-3">
      <button type="button"
      class="block rounded-l-full bg-white border border-black-100 h-10 leading-10"
      :class="cupTypeClass('MALL')" @click="changeCupType('MALL')">매장컵
      </button>
      <button type="button"
      class="block bg-white border border-black-100 h-10 leading-10"
      :class="cupTypeClass('PERSONAL')" @click="changeCupType('PERSONAL')">개인컵
      </button>
      <button type="button"
      class="block rounded-r-full bg-white border border-black-100 h-10 leading-10"
      :class="cupTypeClass('ONETIME')" @click="changeCupType('ONETIME')">일회용컵
      </button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'ProductCup',
  emits: ['cup-type'],
  props: {
    selectedCupType: {
      type: String,
      default: 'MALL',
    },
  },
  methods: {
    changeCupType(value) {
      this.$emit('cup-type', value);
    },
    cupTypeClass(cupType) {
      const isSelected = this.selectedCupType === cupType;
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
