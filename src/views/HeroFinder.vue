<template>
	<div class="search-container">
		<h1>Buscar peleador por ID</h1>
		<form action="">
			<input type="text" placeholder="ID del personaje" v-model="id" />
			<button type="submit" @click.prevent="redirectTo(id)">Buscar</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'hero-finder',
		// props: {},
		data: function () {
			return {
				id: '',
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
	.search-container {
		height: 90vh;
		padding-top: 20px;
		margin-left: auto;
		margin-right: auto;
	}
	form {
		padding-top: 30px;
	}
	input {
		font-size: 16px;
		height: 25px;
		width: 120px;
		border: 2px solid #393e41;
		border-radius: 10px;
		padding-left: 5px;
	}
	button {
		margin-left: 10px;
		padding: 5px 10px;
		border-radius: 8px;
		background: #393e41;
		color: #f6f7eb;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		outline: none;
		box-shadow: 0 5px #999;
	}
	button:hover {
		background: #f6f7eb;
		color: #393e41;
	}
	button:active {
		box-shadow: 0 3px #666;
		transform: translateY(2px);
	}
</style>
