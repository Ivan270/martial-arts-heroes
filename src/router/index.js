import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HeroFinder from '@/views/HeroFinder.vue';
import HeroList from '@/views/HeroList.vue';
import Hero from '@/views/Hero.vue';
import NotFound from '@/views/NotFound.vue';
import NoHero from '@/views/NoHero.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/finder',
		name: 'buscador',
		component: HeroFinder,
	},
	{
		path: '/heroes',
		component: HeroList,
	},
	{
		path: '/hero/:id',
		component: Hero,
		props: true,
	},
	{
		path: '/no-hero',
		component: NoHero,
	},
	{
		path: '*',
		component: NotFound,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
