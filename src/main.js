import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import VueLodash from 'vue-lodash'
// import './plugins/vue-anime-plg'
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)
Vue.use(VueLodash)

require ('animate.css')

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
