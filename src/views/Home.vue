<template>
  <div>
    <UserLogin @login='fetchUsers' />
  </div>
</template>
<script>
import UserLogin from '@/components/UserLogin.vue';
import RepositoryFactory from '@/api/RepositoryFactory';

const { get } = RepositoryFactory.get('user');

export default {
  name: 'HomeLogin',
  components: {
    UserLogin,
  },
  methods: {
    async fetchUsers(val) {
      const { inputId } = val;
      const info = await get();
      const { data } = info;
      if (inputId === data.username) {
        this.$router.replace('products');
      }
    },
  },
};
</script>
