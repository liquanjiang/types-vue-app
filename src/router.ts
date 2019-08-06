import Vue from 'vue';
import Router from 'vue-router';
// @ts-ignore
import Home from './views/Home.vue';
// @ts-ignore
import login from './components/login/login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
      {
          path: '/home',
          name: 'home',
          component: Home,
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => {
          // @ts-ignore
          return import(/* webpackChunkName: "about" */ './views/About.vue');
      },
    },
  ],
});
