<template>
  <div class="container mx-auto mt-5 relative px-5">
    <button @click="back()" class="detailbtn absolute left-0 top-0 ml-4">
      <i class="fa-solid fa-angle-left text-white"></i>
    </button>
    <button class="detailbtn float-right absolute right-0 top-0 mr-4">
      <i class="fa-solid fa-share text-white"></i>
    </button>
    <img :src='$route.query.img' alt="음료 이미지">
    <h1 class="font-bold h-10 leading-10 text-2xl mt-2 text-left">
      {{ $route.query.name }}
      <span v-if='$route.query.best=="true"' class="text-red-700 text-sm">Best*</span>
    </h1>
    <p class="text-sm text-left">{{ $route.query.desc }}</p>
    <p class="font-bold text-left text-xl mt-3">{{ $route.query.price }}원</p>
    <form>
      <p class="grid grid-cols-2 mt-5">
        <label for="temp"
        class="block rounded-l-full bg-white border border-black-100 h-10 leading-10">HOT
          <input type="radio" id="temp" name="temp" class="hidden">
        </label>
        <label for="temp"
        class="block rounded-r-full bg-white border border-black-100 h-10 leading-10">ICE
          <input type="radio" id="temp" name="temp" class="hidden">
        </label>
      </p>
      <h2 class="optionbtn">사이즈</h2>
      <p class="grid grid-cols-4 gap-1">
        <label for="size"
        v-for="cupsize in cupsizes" :key="cupsize.id"
        class="block h-20 bg-white border border-black-100 py-5 flex flex-col items-center">
          <i class="fa-solid fa-mug-saucer"></i>
          {{ cupsize.size }}
          <input type="radio" id="size" name="size" class="hidden">
        </label>
      </p>
      <h2 class="optionbtn">컵 선택</h2>
      <p class="grid grid-cols-3">
        <label for="temp"
        class="block rounded-l-full bg-white border border-black-100 h-10 leading-10">매장컵
          <input type="radio" id="temp" name="temp" class="hidden">
        </label>
        <label for="temp"
        class="block bg-white border border-black-100 h-10 leading-10">개인컵
          <input type="radio" id="temp" name="temp" class="hidden">
        </label>
        <label for="temp"
        class="block rounded-r-full bg-white border border-black-100 h-10 leading-10">일회용컵
          <input type="radio" id="temp" name="temp" class="hidden">
        </label>
      </p>
      <h2 class="optionbtn">퍼스널 옵션</h2>
        <div class="flex justify-between">
          <h3 class="text-left">{{ personaloption.title }}</h3>
          <p class="font-bold">
            <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 mr-2"
            @click="personaloption.count==1 ? personaloption.count = 1 : personaloption.count -= 1">
              <i class="fa-solid fa-minus"></i>
            </button>
            {{ personaloption.count }}
            <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
            @click="personaloption.count==10?
            personaloption.count = 10 : personaloption.count += 1">
             <i class="fa-solid fa-plus"></i>
            </button>
          </p>
        </div>
      <h2 class="text-left font-bold mt-5 mb-1 text-2xl text-blue-800">결제금액</h2>
       <div class="mt-3 flex justify-between">
          <p class="font-bold">
            <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 mr-2"
            @click="totalcount.count==1 ? totalcount.count = 1 : totalcount.count -= 1">
              <i class="fa-solid fa-minus"></i>
            </button>
            {{ totalcount.count }}
            <button type="button" class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
            @click="totalcount.count += 1">
              <i class="fa-solid fa-plus"></i>
            </button>
          </p>
          <p class="font-bold text-2xl">
            {{ TotalPrice }} 원
          </p>
       </div>
       <button type="button"
       class="font-bold py-2 px-4 rounded text-sky-700 border border-sky-700 mt-10 mr-5">담기</button>
       <button type="button"
       class="font-bold py-2 px-4 rounded text-white bg-sky-700 mt-10">주문하기</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cupsizes: [
        {
          size: 'Short',
          price: 4000,
        },
        {
          size: 'Tall',
          price: 4500,
        },
        {
          size: 'Grande',
          price: 5000,
        },
        {
          size: 'Venti',
          price: 5500,
        },
      ],
      personaloption: {
        title: '에스프레소 샷',
        count: 1,
        price: 600,
      },
      totalcount: {
        count: 1,
        price: this.$route.query.price,
      },
    };
  },
  computed: {
    TotalPrice() {
      const personaloptionPrice = this.personaloption.price * (this.personaloption.count - 1);
      return (Number(this.totalcount.price) + personaloptionPrice) * this.totalcount.count;
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
