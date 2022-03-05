<template>
  <div>
    <router-view class="mb-20"/>
  </div>
  <MainNav />
</template>

<script>
import MainNav from '@/components/Base/MainNav.vue';

export default {
  name: 'App',
  components: {
    MainNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
