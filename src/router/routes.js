import authenticated from "@/middleware/authenticated";

export default [
  {
    path: "/",
    name: "dashboard",
    beforeEnter: authenticated,
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue"),
    meta: {
      title: "Dashboard",
      explain: "Dashboard explain",
    },
  },
  {
    path: "/product",
    name: "product",
    beforeEnter: authenticated,
    component: () =>
      import(/* webpackChunkName: "product" */ "@/pages/Product.vue"),
    meta: {
      title: "Product",
      explain: "Product explain",
    },
  },
  {
    path: "/store",
    name: "store",
    beforeEnter: authenticated,
    component: () =>
      import(/* webpackChunkName: "store" */ "@/pages/Store.vue"),
    meta: {
      title: "Store",
      explain: "Store explain",
    },
  },
  {
    path: "/cart",
    name: "cart",
    beforeEnter: authenticated,
    component: () => import(/* webpackChunkName: "cart" */ "@/pages/Cart.vue"),
    meta: {
      title: "Cart",
      explain: "Cart explain",
    },
  },
  {
    path: "/employee",
    name: "employee",
    beforeEnter: authenticated,
    component: () =>
      import(/* webpackChunkName: "employee" */ "@/pages/Employee.vue"),
    meta: {
      title: "Employee",
      explain: "Employee explain",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/pages/Login.vue"),
    meta: {
      layout: "auth",
      title: "Login",
    },
  },
  { path: "*", redirect: "/" },
];
