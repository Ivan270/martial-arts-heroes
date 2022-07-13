<template>
	<div>
		<hero-card :id="id" :nombre="nombre" :src="img"></hero-card>
	</div>
</template>

<script>
	import HeroCard from '@/components/HeroCard.vue';
	export default {
		name: 'hero-view',
		props: ['id'],
		data: function () {
			return {};
		},
		computed: {
			nombre() {
				let peleadorEncontrado = this.peleadores.find((peleador) => {
					return peleador.id == this.id;
				});
				return peleadorEncontrado.nombre;
			},
			img() {
				let peleadorEncontrado = this.peleadores.find((peleador) => {
					return peleador.id == this.id;
				});
				return peleadorEncontrado.imgSrc;
			},
		},
		methods: {},
		// watch: {},
		components: {
			'hero-card': HeroCard,
		},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.peleadores = require('@/assets/peleadores.json');

			let heroes = this.peleadores;
			let encontrado = heroes.find((peleador) => {
				return peleador.id === this.id;
			});

			if (encontrado == undefined) {
				this.$router.push(`/no-hero`);
			}
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped>
	div {
		height: 90vh;
		display: grid;
		place-content: center;
	}
</style>
