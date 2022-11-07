import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    document.title = "Vue Basic - " + (to.meta.title || "Login");
  }
  next();
});

export default router;
