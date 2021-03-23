import { App } from 'vue';
import Carousel from './Carousel.vue';
import CarouselPanel from './CarouselPanel.vue';

Carousel.install = (Vue: App) => {
	Vue.component('s-carousel', Carousel);
}

CarouselPanel.install = (Vue: App) => {
	Vue.component('s-carousel-panel', CarouselPanel);
}

export {
	Carousel,
	CarouselPanel,
}