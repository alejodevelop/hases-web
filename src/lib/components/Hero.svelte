<script lang="ts">
	const slides = [
		{
			image: '/jardinero-weedwacker-cortando-cesped-jardin.webp',
			alt: 'Jardinero profesional cortando césped'
		},
		{
			image: '/pool-5055009.webp',
			alt: 'Piscina limpia y cristalina'
		},
		{
			image: '/side-view-people-cleaning-building.webp',
			alt: 'Equipo de limpieza profesional'
		}
	];

	let currentSlide = $state(0);

	import { onMount } from 'svelte';

	onMount(() => {
		const timer = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
		}, 6000);
		return () => clearInterval(timer);
	});
</script>

<section id="inicio" class="relative w-full">
	<div class="relative h-[85vh] w-full overflow-hidden">
		<!-- First slide: static fetchpriority="high" for LCP detection -->
		<img
			src={slides[0].image}
			alt={slides[0].alt}
			class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
			style="opacity: {0 === currentSlide ? 1 : 0};"
			loading="eager"
			fetchpriority="high"
			decoding="sync"
			width="1920"
			height="1080"
		/>
		<!-- Remaining slides: lazy loaded -->
		{#each slides.slice(1) as slide, i}
			<img
				src={slide.image}
				alt={slide.alt}
				class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
				style="opacity: {i + 1 === currentSlide ? 1 : 0};"
				loading="lazy"
				decoding="async"
				width="1920"
				height="1080"
			/>
		{/each}

		<!-- Gradient Overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-background-dark/20 to-background-dark"
		></div>

		<!-- Hero Content -->
		<div class="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center">
			<div class="mb-3 h-1 w-12 bg-gold-accent rounded-full"></div>
			<h2 class="text-white text-4xl md:text-6xl font-light mb-4 tracking-tight leading-tight">
				Elevando el <br /><span
					class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400"
					>Estándar</span
				> de su Hogar
			</h2>
			<p class="text-gray-300 text-sm md:text-lg font-light leading-relaxed max-w-md mb-8">
				Limpieza, mantenimiento y jardinería exclusiva para residencias que exigen perfección.
			</p>
			<button
				class="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-white shadow-glow transition-all hover:scale-105 hover:bg-primary-dark"
			>
				<span class="relative z-10 text-sm font-bold tracking-wide uppercase"
					>Solicitar Presupuesto Premium</span
				>
				<span
					class="material-symbols-outlined relative z-10 text-[20px] group-hover:translate-x-1 transition-transform"
					>arrow_forward</span
				>
				<div
					class="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0"
				></div>
			</button>

			<!-- Slide Indicators -->
			<div class="flex gap-2 mt-8">
				{#each slides as _, i}
					<button
						class="h-1.5 rounded-full transition-all duration-500 {i === currentSlide
							? 'w-8 bg-gold-accent'
							: 'w-1.5 bg-white/30 hover:bg-white/50'}"
						aria-label="Ir a diapositiva {i + 1}"
						onclick={() => {
							currentSlide = i;
						}}
					></button>
				{/each}
			</div>
		</div>
	</div>
</section>
