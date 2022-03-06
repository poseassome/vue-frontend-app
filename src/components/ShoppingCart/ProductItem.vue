<template>
  <div>
    <button type="button" class="absolute right-2"
    @click="deleteList(productmenu.listNo)" data-test="deleteProduct">
      <i class="fa-solid fa-circle-xmark"></i>
    </button>
    <div class="w-full flex justify-between text-left items-center">
      <p class="rounded-full overflow-hidden w-24 h-24">
        <img v-bind:src="productmenu.thumbnail" alt='음료 이미지'
        class="h-full" data-test="product-img">
      </p>
      <div class="w-4/6">
        <p class="font-bold">{{ productmenu.name }}</p>
        <p class="text-sm">{{ productmenu.nameEn }}</p>
        <p class="text-xs text-neutral-500"><span>{{ productmenu.temp }} | </span>
          <span>{{ productmenu.size }} | </span>
          <span>{{ productmenu.cuptype }}</span></p>
        <p class="text-xs text-neutral-500">퍼스널 옵션 : {{ productmenu.personaloption }}</p>
        <div class="flex justify-between">
          <div class="flex justify-between">
            <button type="button" data-test="count-minus"
            class="rounded-full bg-white border border-black-100 w-7 h-7 mr-2"
            @click="minusItem(productmenu.listNo)">
              <i class="fa-solid fa-minus"></i>
            </button>
              <slot name="productCount"></slot>
            <button type="button" data-test="count-plus"
            class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
            @click="plusItem(productmenu.listNo)">
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
          thumbnail: '',
          name: '',
          nameEn: '',
          temp: '',
          size: '',
          cuptype: '',
          personaloption: '',
        };
      },
    },
  },
  methods: {
    deleteList(idx) {
      this.$emit('delete', idx);
    },
    minusItem(listNo) {
      this.$emit('change', {
        listNo,
        num: -1,
      });
    },
    plusItem(listNo) {
      this.$emit('change', {
        listNo,
        num: 1,
      });
    },
  },
};
</script>
