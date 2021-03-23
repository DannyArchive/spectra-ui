import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'SlotsMixin',
})
export default class Slots extends Vue {

	public get getSlots(): Array<any> {
		const slots: any = this.$slots;
		const children: Array<any> = slots.default();
		if (typeof children[0].type === 'symbol' && children.length === 1) return children[0].children;
		const canRemove: Array<number> = [];
		for (const index in children) {
			if (typeof children[index].type === 'symbol') {
				canRemove.push(parseInt(index));
			}
		}
		canRemove.reverse().forEach((i: number) => {
			children.splice(i, 1);
		});
		return children;
	}
}