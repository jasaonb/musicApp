import Vue from 'vue'
import App from './App.vue'
import router from './components/router/r'
import './plugins/element.js'
import './common/varible.less'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')