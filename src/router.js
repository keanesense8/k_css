import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/About.vue')
		},
		{
			path: '/css3',
			name: 'css3',
			component: () => import('./views/html5css3/Css3.vue')
		},
		{
			path: '/transiton_demo',
			name: 'transiton_demo',
			component: () => import('./views/html5css3/TransitionDemo.vue')
		}
	]
});
