import Badge from '@/components/badge';
import { FormContainer, FormItem } from '@/components/form';
import { App } from 'vue';

// Define the list of components.
const components = {
	'badge': Badge,
	'form-container': FormContainer,
	'form-item': FormItem,
};

// Define the install method.
function install(Vue: App): void {
	for (const component in components) {
		Vue.component(`r-${component}`, (components as any)[component])
	}
	// Vue.config.globalProperties.$spectra = SpectraEngine;
}

// Export install and components.
export default { install }
export { default as Badge } from '@/components/badge';
export * from '@/components/form';

// Export all other modules, interfaces, etc.
export * from '@/module/index';
export * from '@/interface/index';
