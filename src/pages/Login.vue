<template>
  <div class="login">
    <p>Login page</p>
    <input type="text" v-model="formLogin.username" />
    <br />
    <input type="password" v-model="formLogin.password" />
    <br />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import AuthService from "@/services/auth";
import sessionStorage from "@/common/sessionStorage";

export default {
  name: "Login",

  data() {
    return {
      formLogin: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      AuthService.login(this.formLogin.username, this.formLogin.password)
        .then((res) => {
          sessionStorage.saveToken(res.token);
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          console.log("login : " + err);
          sessionStorage.destroyToken();
        });
    },
  },
};
</script>
