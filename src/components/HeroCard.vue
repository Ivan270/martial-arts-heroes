<template>
	<div>
		<h4>ID del peleador: {{ id }}</h4>
		<h1>{{ nombre }}</h1>
		<img :src="src" alt="img" />
	</div>
</template>

<script>
	export default {
		name: 'card-hero',
		props: {
			id: {
				type: String,
			},
			nombre: {
				type: String,
			},
			src: {
				type: String,
			},
		},
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
	h4 {
		color: #393e41;
		letter-spacing: 3px;
		padding-bottom: 10px;
	}
	h1 {
		letter-spacing: 10px;
		padding-bottom: 20px;
	}
	img {
		margin-left: auto;
		margin-right: auto;
		border: 2px solid #e94f37;
		border-radius: 7px;
		padding: 7px;
		width: 300px;
		transform: rotate(-3deg);
		animation: bounce-in 0.5s ease 0s 1 normal;
	}
	@keyframes bounce-in {
		0% {
			opacity: 0;
			transform: scale(0.3);
			transform: rotate(0deg);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
		70% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1);
			transform: rotate(-3deg);
		}
	}
</style>
