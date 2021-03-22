# Form Structures

Forms are a key element in websites, and therefore we have created a wrapper element `s-form` that can be used to build super simple and easy to use forms, with validation, and more.

## Usage

To create your form you need to create the main form component.

> All forms can contain any elements, but for validation to work you will need to use the library's components.

```html
<s-form>
	<!-- Elements Here -->
</s-form>
```

In our example we shall create a standard registration form.

```html
<s-form @submit="onSubmit">
	<s-input label="Name" validate="name" />
	<s-input label="Email" validate="email" />
	<s-date label="Date of Birth" validate="" />
	<s-button colour="secondary" type="submit">Register</s-button>
</s-form>
```
