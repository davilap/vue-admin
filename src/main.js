import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// custom
import ElementUI from 'element-ui';
import './assets/style/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
