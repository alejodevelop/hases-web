<script lang="ts">
	import type { LayoutData } from './$types';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	interface Props {
		data: LayoutData;
		children?: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<div class="bg-background-dark min-h-screen flex flex-col">
	<Header />
	<main class="flex-grow pt-[60px]">
		{@render children?.()}
	</main>
	<Footer />
</div>
