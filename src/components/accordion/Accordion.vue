<template>
	<div class="s-component accordion">
		<div class="accordion-item" v-for="(item, index) in getSlots" :key="item">
			<component :is="item" :active="current_active === index" @toggle="handleClick(index)" />
		</div>
	</div>
</template>

<script lang="ts">
	import { mixins, Options } from 'vue-class-component';
	import Slots from '@/mixins/slots';

	@Options({
		name: 'Accordion',
	})
	export default class Accordion extends mixins(Slots) {

		public current_active: number | null = null;

		public handleClick(index: number): void {
			if (this.current_active === index) {
				this.current_active = null;
			} else {
				this.current_active = index;
			}
		}

		public isActive(index: number): boolean {
			if (this.current_active) return false;
			if (this.current_active === index) return true;
			return false;
		}
	}
</script>

<style lang="scss" scoped>
	.accordion {
		display: flex;
		flex: 1;
		flex-direction: column;
		border: 1px solid #e3e3e3;
		border-radius: 3px;

		.accordion-item {
			border-bottom: 1px solid #e3e3e3;

			&:last-child {
				border-bottom: none;
			}
		}
	}
</style>
