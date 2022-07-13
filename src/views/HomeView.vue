<template>
	<div class="home">
		<h1>Bienvenido</h1>
	</div>
</template>

<script>
	export default {
		name: 'HomeView',
		components: {},
	};
</script>
<style scoped>
	.home {
		height: 90vh;
		display: grid;
		place-content: center;
	}
	h1 {
		font-family: 'Bangers', cursive;
		letter-spacing: 10px;
		font-size: 40px;
	}
</style>
