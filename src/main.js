import Vue from "vue";
import App from "./App.vue"
import store from "./store"
import './assets/css/main.css'
import './assets/scss/global.scss'
import router from './router'
import vuetify from './plugins/vuetify'
import 'izitoast/dist/css/iziToast.min.css'
import countryFlag from "./plugins/country-flag.js"

new Vue({
	store,
	router,
	vuetify,
	countryFlag,
	render: h => h(App)
})
	.$mount("#app")
