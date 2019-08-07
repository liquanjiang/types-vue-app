import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './registerServiceWorker'

// 引入的組件
import nodata from './components/common/nodata.vue'
import vueSelect from './components/common/vueselect.vue'
import page from '@/components/common/page.vue'
import loading from '@/components/common/loadingAnimation.vue'

// 引入的通用ts
import util from '@/libs/util'
import apiService from '@/libs/apiService'

import Component from 'vue-class-component'

Component.registerHooks([
    'beforeRouteEnter', // 进入路由之前
    'beforeRouteLeave', // 离开路由之前
    'beforeRouteUpdate'
])

Vue.config.productionTip = false
Vue.prototype.$util = util
Vue.prototype.$apiService = apiService
Vue.component('nodata', nodata)
Vue.component('vue-select', vueSelect)
Vue.component('page', page)
Vue.component('loading', loading)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
