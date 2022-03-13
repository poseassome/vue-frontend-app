<template>
  <div>
    <UserLogin @login='userlogin' />
  </div>
</template>
<script>
import UserLogin from '@/components/UserLogin.vue';
import RepositoryFactory from '@/api/RepositoryFactory';

const UserApi = RepositoryFactory.get('user');

export default {
  name: 'HomeLogin',
  components: {
    UserLogin,
  },
  methods: {
    async userlogin(val) {
      const { inputId, inputPw } = val;
      console.log(val);
      const userApi = new UserApi(this.apiClient);
      const response = await userApi.login(inputId, inputPw);
      if (response) {
        await this.$router.push('/products');
      } else {
        // eslint-disable-next-line no-alert
        alert('아이디와 비밀번호를 확인해주세요.');
      }
    },
  },
};
</script>
