<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = $state(0);

	const clients = [
		{
			name: 'Reservas de Caña Brava',
			logo: '/reservasCanaBrava.webp',
			testimonial: 'Excelente servicio y mantenimiento de áreas verdes.'
		},
		{
			name: 'Altos de la pradera',
			logo: '/altosPradera.webp',
			testimonial: 'Siempre puntuales y profesionales. Recomendados.'
		},
		{
			name: 'Bambú',
			logo: '/bambu.webp',
			testimonial: 'Nuestra piscina se mantiene impecable gracias a ellos.'
		},
		{
			name: 'San Pablo',
			logo: '/sanPablo.webp',
			testimonial: 'Calidad y atención prioritaria. Estamos muy satisfechos.'
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
		Testimonios
	</span>

	<div class="flex justify-center mb-6">
		<div class="flex gap-1">
			{#each Array(5) as _}
				<span class="material-symbols-outlined text-gold-accent text-sm">star</span>
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
						<p class="text-gray-500 text-xs">Cliente Premium</p>
					</div>
				</div>
			</div>
		{/key}
	</div>

	<!-- Dot Navigation -->
	<div class="flex justify-center gap-2 mt-8">
		{#each clients as _, i}
			<button
				class="h-1.5 rounded-full transition-all duration-300 {i === currentIndex
					? 'w-6 bg-gold-accent'
					: 'w-1.5 bg-white/20 hover:bg-white/40'}"
				aria-label="Ver testimonio {i + 1}"
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
