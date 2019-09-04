import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// element ui
import ElementUI from 'element-ui';
import './assets/style/element-variables.scss'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

// i18n
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// lang
import { i18n } from './lang/i18n'

// casl
import ability from './config/ability'
import { abilitiesPlugin } from '@casl/vue'

Vue.use(abilitiesPlugin, ability)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
