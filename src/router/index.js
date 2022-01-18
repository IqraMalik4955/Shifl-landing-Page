import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Dashboard',
		component: () => import( /* webpackChunkName: "/" */ '../views/Dashboard.vue'),

	},
	{
		path: '/home',
		name: 'Home',
		// component: Home
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue'),

	},
	{
		path: '/join',
		name: 'Join Waiting List',
		// component: Home
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '../views/Join.vue'),

	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})
export default router
