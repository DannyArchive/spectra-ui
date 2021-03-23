<template>
	<div class="accordion-panel">
		<div class="header" @click="handleClick" v-if="header_exists">
			<component v-if="header !== false" :is="header" />
			<span class="icon" :class="{active: active}">&dtrif;</span>
		</div>
		<div class="content" v-if="active && content_exists">
			<component v-if="content !== false" :is="content" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, mixins } from 'vue-class-component';
	import Slots from '@/mixins/slots';

	@Options({
		name: 'AccordionPanel',
		props: ['active'],
		emits: ['toggle'],
	})
	export default class AccordionPanel extends mixins(Slots) {

		public active!: boolean;
		public header: any = false;
		public content: any = false;
		public header_exists = true;
		public content_exists = true;

		public handleClick(): void {
			this.$emit('toggle');
		}

		public mounted(): void {
			this.getSlots.forEach((slot: any) => {
				if (slot.type.name === 'AccordionHeader') this.header = slot;
				if (slot.type.name === 'AccordionContent') this.content = slot;
			});
			if (this.header === false) this.header_exists = false;
			if (this.content === false) this.content_exists = false;
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
