<template>
	<div class="accordion-panel">

		<!-- Accordion Error -->
		<div class="header" v-if="!getHeader || !getContent" v-cloak>
			<p class="error-message" v-text="!getHeader ? 'No header specified' : 'No content specified'"></p>
		</div>

		<!-- Accordion Header -->
		<div class="header" @click="handleClick" v-if="getHeader && getContent">
			<component :is="getHeader" />
			<span class="icon" :class="{active: active}">&dtrif;</span>
		</div>

		<!-- Accordion Content -->
		<div class="content-wrapper" ref="content_inner" :style="{height: getHeight}" v-if="getHeader && getContent">
			<div class="content">
				<component :is="getContent" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, mixins } from 'vue-class-component';
	import slots from '@/mixins/slots';

	@Options({
		name: 'AccordionPanel',
		props: ['active'],
		emits: ['toggle'],
	})
	export default class AccordionPanel extends mixins(slots) {

		public active!: boolean;

		public get getHeight(): string {
			if (!this.active) return '0px';
			return `${(this.$refs as any).content_inner.scrollHeight.toString()}px`;
		}

		public get getHeader(): any {
			let header: any = false;
			this.getSlots.forEach((s: any) => {
				if (s.type.name === 'AccordionHeader') header = s;
			});
			return header;
		}

		public get getContent(): any {
			let header: any = false;
			this.getSlots.forEach((s: any) => {
				if (s.type.name === 'AccordionContent') header = s;
			});
			return header;
		}

		public handleClick(): void {
			this.$emit('toggle');
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/base';

	.header {
		padding: 10px 20px;
		position: relative;
		cursor: pointer;
		background-color: white;
		color: #4d4d4d;

		* {
			color: #4d4d4d;
		}

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

	.content-wrapper {
		background-color: #eee;
		height: 0;
		overflow: hidden;
		@include prefix(transition, all 0.5s ease-in-out);

		.content {
			padding: 10px 20px;
			background-color: white;
			color: #4d4d4d;

			&:deep(*) {
				color: #4d4d4d;
			}
		}

		// &.active {
		// 	height: auto;
		// }
	}
</style>
