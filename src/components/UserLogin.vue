<template>
  <div>
    <form>
      <p>
        <label for="userId"
          >
          <input id="userID" type="text" v-model='inputId' data-username placeholder="아이디"
          class="userinput">
        </label>
      </p>
      <p>
        <label for="userPw"
          >
          <input id="userPw" type="password" v-model='inputPw' data-password placeholder="비밀번호"
          class="userinput">
        </label>
      </p>
      <button class="btn mb-2">LOGIN</button>
    </form>
    <div>
    <p class='checkID mb-2'>아이디 : {{inputId}}</p>
    <p class='checkPW mb-2'>비밀번호 : {{inputPw}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputId: '',
      inputPw: '',
    };
  },
};
</script>
