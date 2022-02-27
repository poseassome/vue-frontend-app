<template>
  <div id="shoppingcart" class="container mx-auto mt-5 relative px-5">
    <h1 class="h-10 leading-10 text-2xl" data-test="shoppingcart">장바구니</h1>
    <ul>
      <li v-for="(productmenu, index) in productmenus" :key="productmenu.id"
      class="my-2 border-2 border-sky-700 rounded-md relative p-2" data-test="addProduct-list">
        <button type="button" class="absolute right-2"
        @click="deleteList(index)" data-test="deleteProduct">
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
                @click="productmenu.count==1 ?
                productmenu.count = 1 : productmenu.count -= 1">
                  <i class="fa-solid fa-minus"></i>
                </button>
                  <p data-test="count">{{ productmenu.count }}</p>
                <button type="button" data-test="count-plus"
                class="rounded-full bg-white border border-black-100 w-7 h-7 ml-2"
                @click="productmenu.count==10?
                productmenu.count = 10 : productmenu.count += 1">
                <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <p>{{ comma(TotalPrice(index)) }}원</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="fixed left-0 bottom-0 mb-16 w-full px-5 bg-white">
      <p class="text-xl font-bold">총 결제금액 {{ comma(SumPrice) }}원</p>
      <button
      class="block w-full font-bold py-2 px-4 rounded text-white bg-sky-700 my-2">주문하기</button>
    </div>
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
          nameEn: 'Americano',
          temp: 'ICE',
          size: 'Tall',
          cuptype: '일회용컵',
          personaloption: '에스프레소 샷 2',
          count: 1,
          price: 4500,
        },
        {
          thumbnail: 'https://w.namu.la/s/45d06e347239fc7e2b3c3b57cfe8a5de7709ecd6fa71a4c025753384b1f8aec02c07b8f16ec410f815ed144f9bfe4cd2ac98c5a7fc1e5b8877b1c856ab941ce1163056e98d68880c5c2df4b790708aa2c35cf4f214ed5be4ea474dec2871f356',
          name: '카페라떼',
          nameEn: 'Cafe Latte',
          temp: 'ICE',
          size: 'Tall',
          cuptype: '일회용컵',
          personaloption: '에스프레소 샷 1',
          count: 2,
          price: 5000,
        },
      ],
    };
  },
  methods: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    deleteList(index) {
      this.productmenus.splice(index, 1);
    },
    TotalPrice(idx) {
      const totalprice = this.productmenus[idx].count * this.productmenus[idx].price;
      return totalprice;
    },
  },
  computed: {
    SumPrice() {
      const items = this.productmenus;
      let total = 0;
      items.forEach((value) => {
        const num = Number(value.price) * Number(value.count);
        total += num;
      });
      return total;
    },
  },
};
</script>
