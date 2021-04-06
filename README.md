<p align="center">
	<a href="#">
		<img width="300" src="https://github.com/dannysmc95/spectra-ui/blob/master/spectra-ui-text.svg">
	</a>
</p>

<p align="center">
	Spectra UI is a library full of functional and themeable components for Vue 3 and written in TypeScript.
</p>

<p align="center">
	<img src="https://img.shields.io/npm/v/spectra-ui?color=blue">
	<img src="https://img.shields.io/npm/l/spectra-ui">
	<img src="https://img.shields.io/npm/dw/spectra-ui">
</p>

> This project is still in-development, and is fairly empty still, once it goes into a version 1 release it will be stable to use, but at the moment, it has two components, and both are fairly buggy still :P.

# Features
* Hand crafted components
* Lightweight install
* Written in TypeScript
* Themeable components
* Powered by Vue 3
* Included providers
* Built in Fetch HTTP library wrapper
* [Licensed under MIT](https://raw.githubusercontent.com/dannysmc95/spectra-ui/master/LICENSE)



# Install

You will need [Vue.js](https://v3.vuejs.org/) version 3.0+.

```bash
# npm
npm install spectra-ui --save
```

```bash
# yarn
yarn add spectra-ui
```


# Usage

## All components

```typescript
import { createApp } from 'vue';
import Spectra from 'spectra-ui';
import 'spectra-ui/dist/style.css';

createApp.use(Spectra);
```

## Or individual components

```typescript
import { createApp } from 'vue';
import { Modal, TagInput } from 'spectra-ui';
import 'spectra-ui/dist/style.css';

createApp
	.use(Modal)
	.use(TagInput);
```



# Notes

If you are using `npm link` or installing it via a local folder `npm install ./path/to/spectra-ui` then in your config you will need to make sure vue is resolved from your project instead of the linked project, as well as making sure to disable symlinks.

```javascript
const { resolve } = require('path');

module.exports = {
	chainWebpack: (config) => {
		config.resolve.symlinks(false);
		config.resolve.alias.set('vue$', resolve(__dirname, 'node_modules/vue'));
	}
}
```