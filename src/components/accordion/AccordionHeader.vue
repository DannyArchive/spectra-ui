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
	* {
		color: #4d4d4d;
		font-size: 18px;
		font-weight: bold;
	}
</style>
