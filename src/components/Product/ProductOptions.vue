<template>
  <div>
    <div class="flex justify-between">
      <h3 class="text-left">{{ personalOption.name }}</h3>
      <p class="font-bold">
        <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 mr-2"
        @click="minusOption(personalOption.optionNo)">
          <i class="fa-solid fa-minus"></i>
        </button>
        <slot name="optionQuantity"></slot>
        <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
        @click="plusOption(personalOption.optionNo)">
          <i class="fa-solid fa-plus"></i>
        </button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonalOptions',
  emits: ['option'],
  props: {
    personalOption: {
      type: Object,
      default() {
        return {
          optionNo: '',
          name: '',
        };
      },
    },
  },
  methods: {
    minusOption(optionNo) {
      this.$emit('option', {
        optionNo,
        num: -1,
      });
    },
    plusOption(optionNo) {
      this.$emit('option', {
        optionNo,
        num: 1,
      });
    },
  },
};
</script>
