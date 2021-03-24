<template>
	<div class="s-component carousel">
		<div class="carousel-wrapper" ref="wrapper">
			<div class="carousel-track" ref="track" :style="{width: `${panel_width * getSlots.length}px`}">
				<component class="carousel-inner" :style="{width: `${panel_width}px`}" v-for="(item, index) in getSlots" :is="item" :key="index"/>
			</div>
		</div>
		<span class="control-item arrow-left" @click="previousPanel">&lt;</span>
		<span class="control-item arrow-right" @click="nextPanel">&gt;</span>
		<div class="control-status">
			<span class="status-dot" :class="{active: (current_index + 1) === index}" v-for="index in getSlots.length" :key="index"><!-- DOT --></span>
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, mixins } from 'vue-class-component';
	import { AnimateHelper } from '@/helper/animate';
	import slots from '@/mixins/slots';

	@Options({
		name: 'Carousel',
	})
	export default class Carousel extends mixins(slots) {
		public current_scroll = 0;
		public current_index = 0;
		public panel_width = 0;
		public controls_locked = false;

		public nextPanel(): void {
			if (this.controls_locked) return;
			const wrapper: HTMLDivElement = (this.$refs as any).wrapper;

			if ((this.current_index + 2) <= this.getSlots.length) {
				this.current_index++;
				this.controls_locked = true;
				AnimateHelper.countUp(this.current_scroll, this.panel_width, 250, (count: number) => {
					this.current_scroll = count;
					wrapper.scrollLeft = this.current_scroll;
				}, () => {
					this.controls_locked = false;
				});
			} else {
				this.current_index = 0;
				this.controls_locked = true;
				AnimateHelper.countDown(this.current_scroll, this.current_scroll, 250, (count: number) => {
					this.current_scroll = count;
					wrapper.scrollLeft = this.current_scroll;
				}, () => {
					this.controls_locked = false;
				});
			}
		}

		public previousPanel(): void {
			if (this.controls_locked) return;
			const wrapper: HTMLDivElement = (this.$refs as any).wrapper;

			if ((this.current_index) > 0) {
				this.current_index--;
				this.controls_locked = true;
				AnimateHelper.countDown(this.current_scroll, this.panel_width, 250, (count: number) => {
					this.current_scroll = count;
					wrapper.scrollLeft = this.current_scroll;
				}, () => {
					this.controls_locked = false;
				});
			} else {
				this.current_index = (this.getSlots.length - 1);
				this.controls_locked = true;
				AnimateHelper.countUp(this.current_scroll, this.panel_width * (this.getSlots.length - 1), 250, (count: number) => {
					this.current_scroll = count;
					wrapper.scrollLeft = this.current_scroll;
				}, () => {
					this.controls_locked = false;
				});
			}
		}

		public mounted(): void {
			this.panel_width = (this.$refs as any).wrapper.scrollWidth;
			(window as any).a = (this.$refs as any).wrapper;
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/base';

	.carousel {
		position: relative;
		height: 600px;
		overflow: hidden;
		width: 100%;

		.carousel-item {
			height: 600px;
			width: 100%;
			display: none;

			&.active {
				display: block;
			}
		}

		.carousel-wrapper {
			overflow: hidden;
			width: 100%;
			@include prefix(transition, all 1s ease-in-out);

			.carousel-track {
				width: auto;

				.carousel-inner {
					display: inline-block;
					width: auto;
					max-width: none;
				}
			}
		}

		.control-item {
			position: absolute;
			top: 50%;
			left: 0;
			color: #4d4d4d;
			font-weight: bold;
			font-family: monospace;
			padding: 10px 20px;
			background-color: rgba(white, 0.5);
			cursor: pointer;
			@include prefix(user-select, none);
			@include prefix(transform, translateY(-50%));
			@include prefix(transition, all 0.2s ease-in-out);
			@include prefix(box-shadow, 0 0 5px 0px rgba(black, 0.2));

			&.arrow-right {
				right: 0;
				left: inherit;
			}

			&:hover {
				@include prefix(box-shadow, 0 0 5px 0px rgba(black, 0.6));
			}
		}

		.control-status {
			position: absolute;
			bottom: 10px;
			left: 50%;
			@include prefix(transform, translateX(-50%));

			.status-dot {
				cursor: pointer;
				margin: 0 3px;
				display: inline-block;
				border-radius: 50%;
				height: 10px;
				width: 10px;
				background-color: #747474;
				@include prefix(transition, all 0.2s ease-in-out);

				&.active {
					background-color: #2e2e2e;
				}

				&:hover {
					@include prefix(box-shadow, 0 0 5px 0px rgba(black, 0.6));
				}
			}
		}
	}
</style>
