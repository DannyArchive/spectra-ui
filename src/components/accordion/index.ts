import { App } from 'vue';
import Accordion from './Accordion.vue';
import AccordionPanel from './AccordionPanel.vue';
import AccordionHeader from './AccordionHeader.vue';
import AccordionContent from './AccordionContent.vue';

Accordion.install = (Vue: App) => {
	Vue.component('s-accordion', Accordion);
}

AccordionPanel.install = (Vue: App) => {
	Vue.component('s-accordion-panel', AccordionPanel);
}

AccordionHeader.install = (Vue: App) => {
	Vue.component('s-accordion-header', AccordionHeader);
}

AccordionContent.install = (Vue: App) => {
	Vue.component('s-accordion-content', AccordionContent);
}

export {
	Accordion,
	AccordionPanel,
	AccordionHeader,
	AccordionContent,
}