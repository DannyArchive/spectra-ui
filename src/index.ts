import { App } from 'vue';
import { HttpProvider } from './providers/http';
import { MiscProvider } from './providers/misc';
import { AnimateHelper } from './helper/animate';

// Import all components.
import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from '@/components/accordion';
import { Carousel, CarouselPanel } from '@/components/carousel';

// Define the list of components.
const components = {
	'accordion': Accordion,
	'accordion-panel': AccordionPanel,
	'accordion-header': AccordionHeader,
	'accordion-content': AccordionContent,
	'carousel': Carousel,
	'carousel-panel': CarouselPanel,
};

// Define the install method.
function install(Vue: App): void {
	for (const component in components) {
		Vue.component(`s-${component}`, (components as any)[component])
	}
	// Vue.config.globalProperties.$spectra = SpectraEngine;
}

// Export install and components.
export default { install };
export {
	Accordion,
	AccordionPanel,
	AccordionHeader,
	AccordionContent,
	Carousel,
	CarouselPanel,

	HttpProvider,
	MiscProvider,
	AnimateHelper,
}

// Export all other modules, interfaces, etc.
export * from '@/module/index';
export * from '@/interface/index';
