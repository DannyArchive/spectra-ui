# Theme Engine

The theme engine facilitates the addition of new styles and designs for complete customisation.

## Features / Notes

* All themes have a dark and light section for custom colours per each mode.
* All themes have a defined border and background, this is the generic background and border colour on all components.
* Themes that only specify one mode will have the styles cloned for the other mode and a default for the mode specified will be set.
* Themes with both light and dark mode can have a default added to define the default mode to select.
* Themes can be changed on the fly, and / or be scoped per component, scroll down for more information.
* You can add your own colours to any theme which you can define per component, this can be done in the `addTheme` or `updateTheme` methods.
* Any colours not defined, will fallback to the default.
* A theme can contain, colours, typography, icons, sizes, and more.
* If you want to see an existing theme, then call the `getTheme('default')` to pull the default theme content.
* All themes are reactive, and therefore, by adding a new colour at any point in your application (on user input), then you can then use that colour as soon as the colour has been added.

## Usage

### Add Theme

A theme is a collection of styles, a theme can define styles for all components, each theme can be overridden per component, but by creating a new theme, you can define it for all.

```typescript
import { ThemeEngine } from 'spectra-ui';

ThemeEngine.addTheme('high-contrast', {
	typography: {
		font: 'sans-serif',
		weight: 'normal',
		size: '15px',
	},
	colours:{
		dark: {
			primary:	'#FFFFFF',
			secondary:	'#FFFF00',
			accent:		'#00FFFF',
			error:		'#FF0000',
			info:		'#0000FF',
			success:	'#008000',
			warning:	'#FFA500',
			border:		'#E3E3E3',
			background:	'#FFFFFF',
		},
	},
});
```

### Update Theme

To update a theme, you can call the update theme method, this will allow you to update/add/overwrite any part of a theme at any point.

```typescript
import { ThemeEngine } from 'spectra-ui';

ThemeEngine.updateTheme('high-contrast', {
	colours: {
		dark: {
			primary: '#F1F1F1',
		},
	},
});
```

### Theme Caching

All themes are calculated on runtime, and when `addTheme` or `updateTheme` are called, sometimes, you may want to use theme caching to stop this, by default, theme caching will cache the compiled output, and can be done however you wish. Theme caching is NOT automatic, and you must call the `.cache()` method to actually cache the theme.

Another important point about caching, is that when a theme is cached, it is the loaded result until the cache item expires, this means if you were to reload the page many times, the cache would be persistent until, by default caches last for 24 hours.

To use theme caching you must setup the `get` and `set` methods, by default the expiry time is 24 hours but you can of course change this, example below.

```typescript
import { ThemeEngine } from 'spectra-ui';

ThemeEngine.setCacheMethods({
	get: () => window.localStorage.getItem('spectra-theme-cache'),
	set: (content: any) => window.localStorage.setItem('spectra-theme-cache', content),
	expires: 864000000, // 24 hours in milliseconds.
});

ThemeEngine.cache();
```

> If you ever need to rebuild the cache, for development or testing purposes (we suggest you don't cache in development, but for production apps this may be required) you can call the `rebuild()` method, which can be hooked to a button somewhere on the front-end.
