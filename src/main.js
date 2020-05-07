import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '@/services/axios_init'
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
