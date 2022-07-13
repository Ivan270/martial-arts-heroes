<template>
	<div>
		<h1>Página No Encontrada</h1>
		<router-link to="/" class="animate__animated animate__heartBeat"
			>Ir al Inicio</router-link
		>
	</div>
</template>

<script>
	export default {
		name: 'not-found',
		// props: {},
		data: function () {
			return {};
		},
		// computed: {},
		//methods: {}
		// watch: {},
		// components: {},
		// mixins: [],
		// filters: {},
		// -- Lifecycle Methods
		// -- End Lifecycle Methods
	};
</script>

<style scoped>
	div {
		height: 90vh;
		display: grid;
		place-content: center;
	}
	h1 {
		font-size: 45px;
		letter-spacing: 5px;
	}
	a {
		padding-top: 20px;
		font-size: 20px;
	}
</style>
