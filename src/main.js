import Vue from 'vue'
import App from './App.vue'

import "@egjs/flicking/dist/flicking.css"; // Supports IE10+, using CSS flex
import "@egjs/flicking/dist/flicking-inline.css"; //Supports IE9+, using CSS inline-box

import VueFlicking from "@egjs/vue-flicking";


Vue.use(VueFlicking);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
