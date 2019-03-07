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
		},
		{
			path: '/transiton_group_demo',
			name: 'transiton_group_demo',
			component: () => import('./views/html5css3/TransitionGroupDemo.vue')
		}
		,
		{
			path: '/anime_demo',
			name: 'anime_demo',
			component: () => import('./views/html5css3/AnimeDemo.vue')
		}
		,
		{
			path: '/anime_css_demo',
			name: 'anime_css_demo',
			component: () => import('./views/html5css3/AnimeCssDemo.vue')
		}
		,
		{
			path: '/svg_animation_demo',
			name: 'svg_animation_demo',
			component: () => import('./views/html5css3/SvgAnimationDemo.vue')
		}
		
		

		
	]
});
