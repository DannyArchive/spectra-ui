import { App } from 'vue';
import Badge from './Badge.vue';

Badge.install = (Vue: App) => {
	Vue.component('r-badge', Badge);
}

export default Badge;
