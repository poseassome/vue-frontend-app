<template>
  <div class="container mx-auto mt-5">
    <h1 class="font-bold h-10 leading-10 text-2xl">전체 메뉴</h1>
    <ul class="grid grid-cols-2">
      <li v-for="productmenu in productmenus" :key="productmenu.id"
        class="rounded-xl overflow-hidden m-1 drop-shadow-lg bg-white">
        <router-link :to="{ name: 'ProductDetail',
        query: { name: productmenu.name,
        img: productmenu.thumbnail,
        best: productmenu.best,
        desc: productmenu.description,
        price: productmenu.price }}">
          <div>
              <img v-bind:src="productmenu.thumbnail" alt='음료 이미지'>
              <p class="h-10 leading-10 font-bold">{{ productmenu.name }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productmenus: [
        {
          thumbnail: 'http://img.segye.com/content/image/2020/01/30/20200130516148.jpg',
          name: '아메리카노',
          best: true,
          description: '진한 에스프레소와 뜨거운 물을 섞어 깔끔하고 강렬한 에스프레소를 가장 부드럽게 잘 느낄 수 있는 커피',
          price: 4500,
        },
        {
          thumbnail: 'https://w.namu.la/s/45d06e347239fc7e2b3c3b57cfe8a5de7709ecd6fa71a4c025753384b1f8aec02c07b8f16ec410f815ed144f9bfe4cd2ac98c5a7fc1e5b8877b1c856ab941ce1163056e98d68880c5c2df4b790708aa2c35cf4f214ed5be4ea474dec2871f356',
          name: '카페라떼',
          best: false,
          description: '풍부하고 진한 에스프레소가 신선한 스팀 밀크를 만나 부드러워진 커피 위에 우유 거품을 살짝 얹은 대표적인 커피 라떼',
          price: 5000,
        },
      ],
    };
  },
};
</script>
