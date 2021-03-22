import { createApp } from 'vue';
import App from './App.vue';
import SpectraUI from './index';

createApp(App)
	.use(SpectraUI)
	.mount('#app');
