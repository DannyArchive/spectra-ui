<p align="center">
	<a href="#">
		<img width="300" src="spectra-ui-text.svg">
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

<!--<p align="center">
	<a href="#">Explore the docs</a>
</p>-->

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

# Included Components

**Base**
* Button
* Icon
* Divider

**Form**
* Form Container,
* Form Group
* Form Item
* Checkbox
* Colour Picker
* Input
* Number Input
* Radio
* Select
* Slider
* Switch
* Textarea
* Toggle
* Tag Input
* Predictive Input

**List**
* List Container
* List Row
* List Column
* List Item
* List Filters
* Pagination

**Feedback**
* Alert
* Notification
* Drawer
* Loader
* Progress Bar
* Loading Bar
* Message
* Popover
* Modal

**Data Driven**
* Avatar
* Accordion
* Badge
* Tag
* Tabs
* Tooltip

**Navigation**
* Breadcrumbs
* Dropdown

# Included Directives
* Click Outside
* Double Click



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