<script lang="ts">
	let services = [
		{
			title: 'Mantenimiento de Jardines',
			description:
				'Ofrecemos un servicio completo de mantenimiento para que tus áreas verdes luzcan siempre impecables y saludables.',
			image: '/jardinero.webp',
			icon: 'yard'
		},
		{
			title: 'Mantenimiento de piscinas',
			description:
				'Contamos con personal altamente capacitado para el mantenimiento y cuidado de piscinas, incluyendo servicios de salvavidas.',
			image: '/limpiezaPiscina.webp',
			icon: 'water_drop'
		},
		{
			title: 'Servicio integral de aseo',
			description:
				'Nos encargamos de la limpieza profunda y mantenimiento de espacios, garantizando ambientes impecables.',
			image: '/aseo.webp',
			icon: 'cleaning_services'
		},
		{
			title: 'Servicios varios',
			description:
				'Ofrecemos soluciones personalizadas a través de alianzas con expertos en distintos campos, cubriendo cualquier necesidad adicional.',
			image: '/serviciosVarios.webp',
			icon: 'handyman'
		}
	];
</script>

<section id="servicios" class="px-4 py-12 max-w-7xl mx-auto">
	<div class="flex items-center justify-between px-2 mb-8">
		<h3 class="text-white text-2xl font-light tracking-wide">
			Servicios de <span class="font-bold text-gold-accent">Élite</span>
		</h3>
		<button
			class="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
		>
			Ver todo <span class="material-symbols-outlined text-[16px]">chevron_right</span>
		</button>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		{#each services as service}
			<div
				class="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-surface-dark shadow-lg"
			>
				<img
					src={service.image}
					alt={service.title}
					class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
					loading="lazy"
					width="400"
					height="400"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
				></div>
				<div class="absolute bottom-0 left-0 w-full p-6">
					<div
						class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
					>
						<span class="material-symbols-outlined text-white">{service.icon}</span>
					</div>
					<h4 class="text-xl font-bold text-white mb-2">{service.title}</h4>
					<p class="text-sm text-gray-300 line-clamp-3 mb-4">{service.description}</p>
					<button
						class="text-xs font-bold text-primary hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
					>
						Detalles <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
					</button>
				</div>
			</div>
		{/each}
	</div>
</section>
