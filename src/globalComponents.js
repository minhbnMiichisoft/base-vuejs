import Vue from "vue";

Vue.component("default-layout", () => import("@/layouts/Default"));
Vue.component("auth-layout", () => import("@/layouts/Auth"));
