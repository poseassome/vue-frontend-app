<template>
  <div class="container mx-auto mt-5">
    <h1 class="font-bold h-10 leading-10 text-2xl">전체 메뉴</h1>
    <ul class="grid grid-cols-2">
      <li v-for="productmenu in productmenus" :key="productmenu.id"
        class="rounded-xl overflow-hidden m-1 drop-shadow-lg bg-white">
        <router-link to='/productdetail'>
          <div>
              <img v-bind:src="productmenu.thumbnail" alt='음료 이미지' class="">
              <p class="h-10 leading-10 font-bold">{{ productmenu.description }}</p>
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
          description: '아메리카노',
        },
        {
          thumbnail: 'https://w.namu.la/s/45d06e347239fc7e2b3c3b57cfe8a5de7709ecd6fa71a4c025753384b1f8aec02c07b8f16ec410f815ed144f9bfe4cd2ac98c5a7fc1e5b8877b1c856ab941ce1163056e98d68880c5c2df4b790708aa2c35cf4f214ed5be4ea474dec2871f356',
          description: '카페라떼',
        },
      ],
    };
  },
};
</script>
