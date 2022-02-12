<template>
  <div>
    <form>
      <p>
        <label for="userId"
          >아이디
          <input id="userID" type="text" v-model='inputId' data-username>
        </label>
      </p>
      <p>
        <label for="userPw"
          >비밀번호
          <input id="userPw" type="password" v-model='inputPw' data-test='userPW'>
        </label>
      </p>
      <button>LOGIN</button>
    </form>
    <div>
    <p class='userID'>아이디 : {{inputId}}</p>
    <p>비밀번호 : {{inputPw}}</p>
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
