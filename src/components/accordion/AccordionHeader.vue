<template>
	<div class="accordion-header">
		<slot />
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'AccordionHeader',
	})
	export default class AccordionHeader extends Vue {}
</script>

<style lang="scss" scoped>
	p { color: blue; }
</style>
