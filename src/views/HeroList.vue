<template>
	<div class="list-container">
		<h1>Lista de Peleadores</h1>
		<ul>
			<li v-for="peleador in peleadores" :key="peleador.id">
				<a @click="redirectTo(peleador.id)">{{ peleador.nombre }}</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'hero-list',
		// props: {},
		data: function () {
			return {
				peleadores: [],
				peleador: {
					id: '',
					nombre: '',
					imgSrc: '',
				},
			};
		},
		// computed: {},
		methods: {
			redirectTo(id) {
				this.$router.push(`/hero/${id}`);
			},
		},

		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		created() {
			this.peleadores = require('@/assets/peleadores.json');
		},
		// -- End Lifecycle Methods
	};
</script>

<style scoped>
	.list-container {
		height: 90vh;
		padding-top: 20px;
		margin-left: auto;
		margin-right: auto;
	}
	ul {
		padding-top: 30px;
		color: #393e41;
	}
	ul li {
		text-decoration: underline;
		text-align: left;
		font-size: 18px;
		padding-bottom: 10px;
		transition: all 0.1s linear;
		cursor: pointer;
		list-style-position: inside;
	}
	ul li:hover {
		font-size: 20px;
	}
</style>
