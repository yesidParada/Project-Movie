import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFount.vue";
import Search from "../views/Search.vue";
import Popular from "../views/Popular.vue";
import NewMovie from "../views/NewMovie.vue";
import MovieDetail from "../views/MovieDetail.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home" }
  },
  {
    path: "/Search",
    name: "Search",
    component: Search,
    meta: { title: "Search" }
  },
  {
    path: "/Popular",
    name: "Popular",
    component: Popular,
    meta: { title: "Popular" }
  },
  {
    path: "/NewMovie",
    name: "NewMovie",
    component: NewMovie,
    meta: { title: "New Movie" }
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: { title: "Somos" }
  },
  {
    path: "/Movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
    props: true,
    meta: { title: "Movie Detail" }
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: { title: "Not Found" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
