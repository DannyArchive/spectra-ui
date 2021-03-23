import type { UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

const config: UserConfig = {
	alias: [
		{
			find: '@',
			replacement: path.resolve(__dirname, 'src'),
		},
	],
	plugins: [vue()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'SpectraUI',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
}

export default config;
