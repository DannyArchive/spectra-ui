<template>
	<main class="content" id="main">

		<!-- Header -->
		<header class="header" id="header">
			<img src="/spectra-ui-text.svg" alt="Spectra UI Logo" />
		</header>

		<!-- Accordion -->
		<section class="component-item">
			<article class="component-header">
				<h2 class="title">Accordion</h2>
			</article>
			<article class="component-content">
				<s-accordion>
					<s-accordion-panel v-for="index in 5" :key="index">
						<s-accordion-header>
							Item {{ index }}
						</s-accordion-header>
						<s-accordion-content>
							<p> Sint non non eu eiusmod aliqua cupidatat eiusmod nostrud cillum fugiat. Aute velit culpa amet sunt commodo sit ea enim. Ea et ipsum minim sint sit et minim. Ipsum in cillum in ad pariatur. Sunt qui do qui laboris pariatur ut nostrud aliquip aliqua ipsum pariatur fugiat.</p>
						</s-accordion-content>
					</s-accordion-panel>
				</s-accordion>
			</article>
		</section>
	</main>
</template>

<style lang="scss">
	body {
		background-color: #1f1f1f;
		padding: 24px;

		#main {
			max-width: 980px;
			margin: 0 auto;
			width: 100%;
		}

		* {
			font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
			font-size: 16px;
			color: white;
			font-weight: normal;
		}
	}

	#header {
		text-align: center;
		color: #4d4d4d;
		float: left;
		width: 100%;
		padding-bottom: 20px;
	}

	.component-item {
		float: left;
		width: 100%;

		.component-header {
			float: left;
			width: 100%;

			.title {
				font-size: 24px;
				border-bottom: 1px solid rgba(white, 0.3);
			}
		}

		.component-content {
			float: left;
			width: 100%;
			padding: 10px 0;
		}
	}
</style>