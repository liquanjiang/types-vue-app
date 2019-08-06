import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
import router from './router';
import store from './store';
// main.ts
import Component from 'vue-class-component';
import apiService from '@/libs/apiService';

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate',
]);

Vue.config.productionTip = false;
Vue.prototype.$apiService = apiService;
Vue.prototype.$open = (url: any = 'https://github.com/d2-projects') => {
    window.open(url)
};


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
