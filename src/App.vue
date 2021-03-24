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
							<h3>Some title here</h3>
							<p>Anim consequat mollit ut culpa proident. Irure duis occaecat culpa veniam tempor commodo consectetur aute non amet nulla consectetur est commodo. Ullamco et do dolore quis ipsum cillum deserunt. Voluptate do ea cillum proident incididunt adipisicing do. Officia labore Lorem et veniam exercitation ullamco occaecat. Cillum commodo deserunt velit id nulla reprehenderit irure laboris tempor aliquip. Nostrud cillum ullamco eu ipsum enim excepteur ut sit eu.</p>
							<p>Cillum magna amet laboris consequat irure cillum minim qui commodo cillum pariatur elit. Qui incididunt aliqua ex est aute amet ex magna aute ipsum reprehenderit ea. Amet et duis minim commodo elit commodo excepteur sint nostrud commodo laborum exercitation. Deserunt do Lorem mollit fugiat elit do quis occaecat est nostrud do minim eu nisi.</p>
							<p>Ullamco ea occaecat minim exercitation esse ea. Aliquip dolore aliquip magna sunt laborum. Deserunt dolor dolore minim do minim ipsum dolore nisi elit.</p>
							<p>Laborum non laborum velit esse elit aliquip magna adipisicing magna deserunt. Duis irure veniam sit aliquip magna tempor voluptate. Adipisicing eiusmod ex proident nostrud pariatur labore duis incididunt nulla.</p>
						</s-accordion-content>
					</s-accordion-panel>
				</s-accordion>
			</article>
		</section>

		<!-- Carousel -->
		<section class="component-item">
			<article class="component-header">
				<h2 class="title">Carousel</h2>
			</article>
			<article class="component-content">
				<s-carousel>
					<s-carousel-panel v-for="index in 3" :key="index">
						<div style="background-image: url(https://placehold.it/1200x600); background-repeat: no-repeat; height: 600px; background-position: 50%;">
							<p>Some Text {{ index }}</p>
						</div>
					</s-carousel-panel>
				</s-carousel>
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