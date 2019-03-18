import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './common/css/border-1px.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
