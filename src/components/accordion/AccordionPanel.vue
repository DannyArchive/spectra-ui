<template>
	<div class="accordion-panel">
		<div class="header" @click="handleClick">
			<slot name="header" />
			<span class="icon" :class="{active: active}">&dtrif;</span>
		</div>
		<div class="content" v-if="active">
			<slot name="content" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'AccordionPanel',
		props: ['active'],
		emits: ['toggle'],
	})
	export default class AccordionPanel extends Vue {

		public active!: boolean;

		public handleClick(): void {
			this.$emit('toggle');
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		padding: 10px 20px;
		position: relative;

		.icon {
			position: absolute;
			top: 50%;
			right: 20px;
			transform: translateY(-50%);
			font-family: monospace;
			font-size: 26px;

			&.active {
				transform: rotate(180deg);
				top: 20%;
			}
		}
	}

	.content {
		padding: 10px 20px;
	}
</style>
