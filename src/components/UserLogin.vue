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
      <button type='button' class="btn mb-2" @click='userlogin()'>LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  emits: ['login'],
  data() {
    return {
      inputId: '',
      inputPw: '',
    };
  },
  methods: {
    userlogin() {
      this.$emit('login', {
        inputId: this.inputId,
        inputPw: this.inputPw,
      });
    },
  },
};
</script>
