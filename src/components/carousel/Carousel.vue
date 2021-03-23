<template>
	<slot />
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'Carousel',
	})
	export default class Carousel extends Vue {}
</script>
