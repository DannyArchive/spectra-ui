<template>
	<span class="r-badge">
		<input type="text" v-model="content" />
		<p>{{ content }}</p>
	</span>
</template>

<script lang="ts">
	import { Options, Vue } from 'vue-class-component';

	@Options({
		name: 'r-badge',
	})
	export default class Badge extends Vue {
		public content = 'hello';
	}
</script>
