import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/pages/login/index").default,
    },
    {
      path: "/list",
      name: "list",
      component: require("@/pages/list/index").default,
    },
    {
      path: "/chat",
      name: "chat",
      component: require("@/pages/chat/index").default,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
