# Grid System

The built in grid system uses a mix between Grid and Flex, depending on the requirements of the component, depends on which one will be used. To clarify - if you are creating a list/table of content, then grid system will use the Grid CSS layout, all others will fall back to Flex.

You can of course overwrite this by adding `flex` or `grid`, depending on which you prefer, like so `<s-container flex>` to force that layout.

> To note the container will use CSS Grid automatically when there is more than 1 row, this is because it will assume you are creating a list, as noted above, you can override this by just adding the `flex` attribute to the container element.

---

## Getting Started

To start with, create your new container.

```html
<s-container>
	<!-- Elements -->
</s-container>
```

Then we need to add some columns, in my example I shall create 4 columns.

```html
<s-container>
	<s-column>
		<!-- Column 1 -->
	</s-column>
	<s-column>
		<!-- Column 2 -->
	</s-column>
	<s-column>
		<!-- Column 3 -->
	</s-column>
	<s-column>
		<!-- Column 4 -->
	</s-column>
</s-container>
```

Now for each column I want 2 rows.

```html
<s-container>
	<s-column>
		<s-row>
			<!-- Column 1, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 1, Row 2 -->
		</s-row>
	</s-column>
	<s-column>
		<s-row>
			<!-- Column 2, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 2, Row 2 -->
		</s-row>
	</s-column>
	<s-column>
		<s-row>
			<!-- Column 3, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 3, Row 2 -->
		</s-row>
	</s-column>
	<s-column>
		<s-row>
			<!-- Column 4, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 4, Row 2 -->
		</s-row>
	</s-column>
</s-container>
```

Now let's add weights to each column, to say which should have more space over the other, we are aiming for a left column that is bigger and the right column being smaller, in a list context, the left side may be the name of the list item, and the last column may be some controls.

> Weights are supported by Grid layout only.

```html
<s-container>
	<s-column weight="2">
		<s-row>
			<!-- Column 1, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 1, Row 2 -->
		</s-row>
	</s-column>
	<s-column weight="1">
		<s-row>
			<!-- Column 2, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 2, Row 2 -->
		</s-row>
	</s-column>
	<s-column weight="1">
		<s-row>
			<!-- Column 3, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 3, Row 2 -->
		</s-row>
	</s-column>
	<s-column weight="0.5">
		<s-row>
			<!-- Column 4, Row 1 -->
		</s-row>
		<s-row>
			<!-- Column 4, Row 2 -->
		</s-row>
	</s-column>
</s-container>
```
> When using the grid structure (list) when an item turns to mobile mode, it turns into a key, value list, based on the given `data-name` attribute.

