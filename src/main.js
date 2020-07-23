window.axios = require('axios');

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueMeta from 'vue-meta';


Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
