import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import vuetify from './plugins/vuetify';
import {store} from './store/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store
}).$mount('#app')
