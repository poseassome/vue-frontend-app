<template>
  <div class="mt-40">
    <form>
      <p>
        <label for="userId">
          <input id="userID" type="text" v-model='inputId' data-username placeholder="아이디"
          class="userinput">
        </label>
      </p>
      <p>
        <label for="userPw">
          <input id="userPw" type="password" v-model='inputPw' data-password placeholder="비밀번호"
          class="userinput">
        </label>
      </p>
      <button type='button' class="btn mb-2" @click='userlogin'>LOGIN</button>
    </form>
  </div>
</template>

<script>
import UserApi from '@/api/Repositories/UserRepository';

export default {
  name: 'UserLogin',
  data() {
    return {
      inputId: '',
      inputPw: '',
    };
  },
  methods: {
    async userlogin() {
      const userApi = new UserApi(this.apiClient);
      const response = await userApi.login(this.inputId, this.inputPw);
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
