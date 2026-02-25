<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = $state(0);

	const clients = [
		{
			name: 'Reservas de Caña Brava',
			logo: '/reservasCanaBrava.webp',
			testimonial: 'Excelente acompañamiento en mantenimiento de zonas verdes y aseo.'
		},
		{
			name: 'Altos de la Pradera',
			logo: '/altosPradera.webp',
			testimonial: 'Servicio puntual, personal atento y buena coordinacion operativa.'
		},
		{
			name: 'Bambú',
			logo: '/bambu.webp',
			testimonial: 'Nuestro mantenimiento de piscina mejoro en control y continuidad.'
		},
		{
			name: 'San Pablo',
			logo: '/sanPablo.webp',
			testimonial: 'Un aliado confiable para la operacion diaria de nuestras instalaciones.'
		}
	];

	const next = () => {
		currentIndex = (currentIndex + 1) % clients.length;
	};

	onMount(() => {
		const interval = setInterval(next, 5000);
		return () => clearInterval(interval);
	});
</script>

<section id="clientes" class="px-6 py-16 text-center max-w-4xl mx-auto">
	<span
		class="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gold-accent text-xs font-bold tracking-widest uppercase mb-6"
	>
		Experiencia comprobada
	</span>
	<h3 class="text-white text-2xl md:text-3xl font-light mb-4">
		Organizaciones que confian en HASES
	</h3>
	<p class="mx-auto max-w-2xl text-sm md:text-base text-gray-400 mb-8">
		Acompanamos clientes en servicios de aseo, mantenimiento y gestion operativa con enfoque en
		calidad.
	</p>

	<div class="flex justify-center mb-6">
		<div class="flex gap-1">
			{#each [1, 2, 3, 4, 5] as star}
				<span
					class="material-symbols-outlined text-gold-accent text-sm"
					aria-label="Estrella {star}">star</span
				>
			{/each}
		</div>
	</div>

	<div class="relative min-h-[180px] flex items-center justify-center">
		{#key currentIndex}
			<div class="transition-opacity duration-500" style="animation: fadeIn 0.5s ease-in-out;">
				<p class="text-gray-300 italic text-lg md:text-xl mb-6 leading-relaxed">
					"{clients[currentIndex].testimonial}"
				</p>
				<div class="flex items-center justify-center gap-4">
					<img
						src={clients[currentIndex].logo}
						alt="Logo de {clients[currentIndex].name}"
						class="h-12 w-12 rounded-full bg-surface-dark object-cover border border-white/10"
						loading="lazy"
						width="48"
						height="48"
					/>
					<div class="text-left">
						<p class="text-white text-sm font-bold">{clients[currentIndex].name}</p>
						<p class="text-gray-500 text-xs">Cliente corporativo</p>
					</div>
				</div>
			</div>
		{/key}
	</div>

	<div class="flex justify-center gap-2 mt-8">
		{#each clients as client, i}
			<button
				class="h-1.5 rounded-full transition-all duration-300 {i === currentIndex
					? 'w-6 bg-gold-accent'
					: 'w-1.5 bg-white/20 hover:bg-white/40'}"
				aria-label="Ver testimonio {i + 1}: {client.name}"
				onclick={() => {
					currentIndex = i;
				}}
			></button>
		{/each}
	</div>
</section>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
