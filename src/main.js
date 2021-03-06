import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import "./assets/styles/index"

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
