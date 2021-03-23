import { Options, Vue } from 'vue-class-component';

@Options({
	name: 'SlotsMixin',
})
export default class Slots extends Vue {

	public get getSlots(): Array<any> {
		const slots: any = this.$slots;
		const children: Array<any> = slots.default();
		if (typeof children[0].type === 'symbol') return children[0].children;
		return children;
	}
}