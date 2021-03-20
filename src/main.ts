import { createApp } from 'vue';
import App from './App.vue';
import RewyreUI, { ThemeEngine } from './index';

ThemeEngine.setTheme({});

createApp(App)
	.use(RewyreUI)
	.mount('#app');
