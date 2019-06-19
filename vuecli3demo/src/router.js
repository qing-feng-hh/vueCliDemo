import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserPage from "./views/UserManagePage.vue";
Vue.use(Router);

export default new Router({
  mode: "history",  //使用history模式 去除#
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UserPage
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
