import Vue from "vue";
import App from "./App.vue"
import store from "./store"
import './assets/css/main.css'
import './assets/scss/global.scss'
import router from './router'
import vuetify from './plugins/vuetify'
import 'izitoast/dist/css/iziToast.min.css'
import countryFlag from "./plugins/country-flag.js"
import VueTelInputVuetify from "vue-tel-input-vuetify";
import vuetifyMoney from "./plugins/vuetify-money.js";

import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(VueTelInputVuetify, {
	vuetify,
  });
new Vue({
	store,
	router,
	vuetify,
	axios,
	countryFlag,
	vuetifyMoney,
	render: h => h(App)
})
	.$mount("#app")
