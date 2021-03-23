<template>
	<div class="accordion-content">
		<slot />
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'AccordionContent',
	})
	export default class AccordionContent extends Vue {}
</script>

<style lang="scss" scoped>
	* {
		color: #4d4d4d;
	}
</style>
