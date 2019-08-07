import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// 引入的組件
import nodata from './components/common/nodata.vue'
import vueSelect from './components/common/vueselect.vue'


Vue.config.productionTip = false
Vue.component('nodata', nodata)
Vue.component('vue-select', vueSelect)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
