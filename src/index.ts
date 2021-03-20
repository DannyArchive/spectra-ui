import Badge from './components/badge';
import { App } from 'vue';

// Define the list of components.
const components = {
	Badge,
};

// Define the install method.
function install(Vue: App): void {
	for (const component in components) {
		Vue.component('r-badge', (components as any)[component])
	}
	// Vue.config.globalProperties.$Message = Message;
}

// Export install and components.
export default { install }
export { default as Badge } from './components/badge';

// Export all other modules, interfaces, etc.
export * from '@/module/index';
export * from '@/interface/index';
