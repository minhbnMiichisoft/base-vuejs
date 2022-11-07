<template>
  <div class="default-layout">
    <app-sidebar :menu="menu" />
    <div class="default-main">
      <app-header :title="title" :explain="explain" @logout="logout" />
      <div class="default-content" style="padding: 16px">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "@/components/Sidebar";
import AppHeader from "@/components/Header";
import { MENU } from "@/common/constants";
import AuthService from "@/services/auth";
import sessionStorage from "@/common/sessionStorage";

export default {
  name: "DefaultLayout",

  components: {
    AppSidebar,
    AppHeader,
  },

  data() {
    return {
      menu: MENU,
    };
  },

  computed: {
    title() {
      return this.$route.meta.title;
    },

    explain() {
      return this.$route.meta.explain;
    },
  },

  methods: {
    logout() {
      AuthService.logout()
        .then(() => {
          sessionStorage.destroyToken();
          this.$router.push("login");
        })
        .catch((err) => {
          console.log("logout : " + err);
          sessionStorage.destroyToken();
          this.$router.push("login");
        });
    },
  },
};
</script>
