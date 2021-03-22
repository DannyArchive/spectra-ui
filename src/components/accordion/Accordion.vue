<template>
	<div class="s-component accordion">
		<div class="accordion-item" v-for="(item, index) in getSlots" :key="item">
			<component :is="item" :active="current_active === index" @toggle="handleClick(index)" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'Accordion',
	})
	export default class Accordion extends Vue {

		public current_active: number | null = null;

		public get getSlots(): Array<any> {
			const items = (this.$slots as any).default()[0].children;
			if (!items) return [];
			return items;
		}

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
