<template>
  <div>
    <table data-test="product-temperature" class="mt-3">
      <tr>
        <td class="product-temperature" :class="productHotClass" data-test="product-hot">
          <button type="button" class="w-full h-full" @click="changeTemperature('HOT')">HOT</button>
        </td>
        <td class="product-temperature" :class="productIceClass" data-test="product-ice">
          <button type="button" class="w-full h-full" @click="changeTemperature('ICE')">ICE</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'ProductTemp',
  emits: ['temperature'],
  props: {
    selectedTemperature: {
      type: String,
      default: 'HOT',
    },
  },
  computed: {
    isHotSelected() {
      return this.selectedTemperature === 'HOT';
    },
    isIceSelected() {
      return this.selectedTemperature === 'ICE';
    },
    productHotClass() {
      return {
        'product-hot-selected': this.isHotSelected,
        'product-hot': !this.isHotSelected,
      };
    },
    productIceClass() {
      return {
        'product-ice-selected': this.isIceSelected,
        'product-ice': !this.isIceSelected,
      };
    },
  },
  methods: {
    changeTemperature(value) {
      this.$emit('temperature', value);
    },
  },
};
</script>

<style scoped>
.product-temperature {
  @apply inline-block w-1/2 mx-auto text-center py-2 border border-slate-500;
}

table {
  @apply border-collapse w-full;
}

.product-hot {
  @apply bg-white text-slate-600 rounded-tl-full rounded-bl-full;
}

.product-hot-selected {
  @apply bg-red-600 text-white border-red-600 rounded-tl-full rounded-bl-full;
}

.product-ice {
  @apply bg-white text-slate-600 rounded-tr-full rounded-br-full;
}

.product-ice-selected {
  @apply bg-blue-600 text-white border-blue-600 rounded-tr-full rounded-br-full;
}
</style>
