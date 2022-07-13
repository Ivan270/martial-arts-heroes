<template>
	<div id="app">
		<nav>
			<router-link to="/heroes">Peleadores</router-link> |
			<router-link :to="{ name: 'buscador' }">Buscador</router-link>
		</nav>
		<transition
			mode="out-in"
			enter-active-class="animate__animated animate__bounceIn"
			leave-active-class="animate__animated animate__bounceOut"
			><router-view
		/></transition>
	</div>
</template>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Marvel&display=swap');
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Marvel', sans-serif;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h5,
	h6 {
		font-family: 'Bangers', cursive;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #e94f37;
		display: grid;
		place-content: center;
		background: #f6f7eb;
	}

	nav {
		height: 10vh;
		width: 100vw;
		background: #f6f7eb;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		font-family: 'Bangers', cursive;
		letter-spacing: 5px;
	}

	nav a.router-link-exact-active {
		color: gray;
	}
</style>
