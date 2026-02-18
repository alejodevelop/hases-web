<script>
	let values = [
		{
			title: 'Rapidez',
			description:
				'Realizamos nuestros servicios en el menor tiempo posible sin comprometer la calidad.',
			icon: 'schedule' // or speed
		},
		{
			title: 'Eficiencia',
			description: 'Maximizamos los recursos para ofrecer el mejor servicio al menor costo.',
			icon: 'bolt' // or savings
		},
		{
			title: 'Confianza',
			description:
				'Estamos comprometidos con proveer el mejor de los servicios y atención prioritaria.',
			icon: 'verified_user'
		}
	];
</script>

<section
	id="nosotros"
	class="bg-surface-dark py-16 px-6 my-8 mx-4 rounded-3xl relative overflow-hidden max-w-7xl md:mx-auto"
>
	<!-- Decorative Elements -->
	<div
		class="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
	></div>
	<div
		class="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-gold-accent/5 blur-3xl"
	></div>

	<div class="relative z-10 text-center">
		<span
			class="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gold-accent text-xs font-bold tracking-widest uppercase mb-6"
		>
			¿Quiénes Somos?
		</span>
		<h3 class="text-white text-2xl md:text-3xl font-light mb-8 leading-snug">
			"Tu aliado estratégico en servicios de <span
				class="text-white font-bold border-b border-primary">aseo, mantenimiento</span
			>
			y <span class="text-white font-bold border-b border-gold-accent">jardinería</span>."
		</h3>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
			{#each values as value}
				<div class="flex flex-col items-center gap-3">
					<div class="p-3 rounded-full bg-background-dark border border-white/10 text-primary">
						<span class="material-symbols-outlined">{value.icon}</span>
					</div>
					<h5 class="text-white font-bold">{value.title}</h5>
					<p class="text-gray-400 text-sm">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
