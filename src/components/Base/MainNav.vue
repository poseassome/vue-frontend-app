<template>
  <div>
    <ul class="flex text-center items-center justify-around fixed bottom-0 w-full h-16
    bg-gradient-to-t from-gray-300 to-white
    border-t border-gray-300">
      <li>
        <router-link to="/">
          <i class="fa-solid fa-house"></i><br/>
          홈
        </router-link>
      </li>
      <li>
        <router-link to="/shoppingcart">
          <i class="fa-solid fa-cart-shopping"></i><br/>
          장바구니
        </router-link>
      </li>
      <li>
        <i class="fa-solid fa-gear"></i><br/>
        설정
      </li>
    </ul>
  </div>
</template>
