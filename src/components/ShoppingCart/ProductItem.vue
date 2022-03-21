<template>
  <div>
  <!--
    <button type="button" class="absolute right-2"
    @click="deleteList(idx)" data-test="deleteProduct">
      <i class="fa-solid fa-circle-xmark"></i>
    </button>
    -->
    <div class="w-full flex justify-between text-left items-center">
      <p class="rounded-full overflow-hidden w-24 h-24">
        <img v-bind:src="productmenu.product.imgUrl" alt='음료 이미지'
        class="h-full" data-test="product-img">
      </p>
      <div class="w-4/6">
        <p class="font-bold">{{ productmenu.product.nameKr }}</p>
        <p class="text-sm">{{ productmenu.product.nameEng }} | {{ productmenu.cupSize.name }}</p>
        <p class="text-xs text-neutral-500"
        v-for="(option, index) in productmenu.options" :key="option.optionNo">
          {{ optionText(option, index) }}
        </p>
        <div class="flex justify-between">
          <div class="flex justify-between">
            <button type="button" data-test="count-minus"
            class="rounded-full bg-white border border-black-100 w-7 h-7 mr-2"
            @click="minusItem(idx)">
              <i class="fa-solid fa-minus"></i>
            </button>
              <slot name="productCount"></slot>
            <button type="button" data-test="count-plus"
            class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
            @click="plusItem(idx)">
            <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <slot name="productPrice"></slot>원
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  emits: ['delete', 'change'],
  props: {
    productmenu: {
      type: Object,
      default() {
        return {
          quantity: -1,
          cupSize: {
            name: '',
          },
          options: [],
          product: {
            productNo: -1,
            nameKr: '테스트 커피',
            nameEng: '',
            imgUrl: '',
            price: -1,
          },
          optionsInfo: [],
        };
      },
    },
    idx: {
      type: Number,
    },
  },
  methods: {
    optionText(option, idx) {
      const optionInfo = this.productmenu.optionsInfo[idx];
      return `- ${optionInfo.name} ${option.quantity.toLocaleString()}`;
    },
    deleteList(idx) {
      this.$emit('delete', idx);
    },
    minusItem(idx) {
      this.$emit('change', {
        idx,
        num: -1,
      });
    },
    plusItem(idx) {
      this.$emit('change', {
        idx,
        num: 1,
      });
    },
  },
};
</script>
