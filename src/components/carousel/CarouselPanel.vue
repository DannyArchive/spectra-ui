<template>
	<div class="carousel-panel">
		<slot />
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'CarouselPanel',
	})
	export default class CarouselPanel extends Vue {}
</script>
