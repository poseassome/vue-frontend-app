<template>
  <div id="productlist" class="container mx-auto mt-5" data-test="product-type">
    <h1 class="h-10 leading-10 text-2xl">에스프레소</h1>
    <ul class="px-5">
      <li v-for="productmenu in products" :key="productmenu.id" class="my-2"
      data-test="product-item">
        <router-link>
        <div class="grid grid-cols-3">
            <p class="rounded-full overflow-hidden w-24 h-24">
              <img v-bind:src="productmenu.imgUrl" alt='음료 이미지'
              class="h-full" data-test="product-img">
            </p>
            <div class="col-span-2 text-left">
              <p class="font-bold text-xl" data-test="product-name">{{ productmenu.nameKr }}
                <span v-if='productmenu.isNewProduct==true' data-test="NewProduct"
                class="text-green-700 text-sm align-super">New</span>
                <span v-if='productmenu.popular==true' data-test="PopukarProduct"
                class="text-red-700 text-sm align-super">Hot</span>
              </p>
              <p data-test="product-nameEn">{{ productmenu.nameEng }}</p>
              <p data-test="product-price">{{ comma(productmenu.price) }}원</p>
            </div>
        </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Object,
      default() {
        return {
          nameEng: '',
          nameKr: '',
          imgUrl: '',
        };
      },
    },
  },
  // data() {
  //   return {
  //     productmenus: [
  //       {
  //         thumbnail: 'https://www.collinsdictionary.com/images/full/espresso_194276339.jpg',
  //         name: '에스프레소',
  //         nameEn: 'Espresso',
  //         best: false,
  //         new: false,
  //         popular: false,
  //         description: '향기로운 크레마 층과 바디층, 하트층으로 이루어져 있으며, 입안 가득히 커피와 달콤한 카라멜 향이 느껴지는 커피 음료',
  //         price: 4000,
  //       },
  //       {
  //         thumbnail: 'http://img.segye.com/content/image/2020/01/30/20200130516148.jpg',
  //         name: '아메리카노',
  //         nameEn: 'Americano',
  //         best: true,
  //         new: false,
  //         popular: true,
  //         description: '진한 에스프레소와 뜨거운 물을 섞어 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피',
  //         price: 4500,
  //       },
  //       {
  //         thumbnail: 'https://w.namu.la/s/45d06e347239fc7e2b3c3b57cfe8a5de7709ecd6fa71a4c025753384b1f8aec02c07b8f16ec410f815ed144f9bfe4cd2ac98c5a7fc1e5b8877b1c856ab941ce1163056e98d68880c5c2df4b790708aa2c35cf4f214ed5be4ea474dec2871f356',
  //         name: '카페라떼',
  //         nameEn: 'Cafe Latte',
  //         best: false,
  //         new: true,
  //         poppular: false,
  //         description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼',
  //         price: 5000,
  //       },
  //     ],
  //   };
  // },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
};
</script>
