<script lang="ts">
	type Service = {
		title: string;
		description: string;
		image: string;
		icon: string;
		scope: string;
	};

	const services: Service[] = [
		{
			title: 'Aseo integral y limpieza operativa',
			description:
				'Mantenemos espacios limpios, ordenados y funcionales en edificios, copropiedades y organizaciones.',
			image: '/aseo.webp',
			icon: 'cleaning_services',
			scope: 'Interiores, zonas comunes y apoyo diario'
		},
		{
			title: 'Jardineria y paisajismo',
			description:
				'Disenamos, cuidamos y preservamos zonas verdes para garantizar entornos seguros y bien presentados.',
			image: '/jardinero.webp',
			icon: 'yard',
			scope: 'Mantenimiento, poda y embellecimiento'
		},
		{
			title: 'Mantenimiento de piscinas',
			description:
				'Gestionamos limpieza, control y funcionamiento de piscinas con personal capacitado y suministro de insumos.',
			image: '/limpiezaPiscina.webp',
			icon: 'water_drop',
			scope: 'Piscineros, salvavidas e insumos'
		},
		{
			title: 'Apoyo operativo y gestion ambiental',
			description:
				'Fortalecemos la operacion de nuestros clientes con auxiliares, servicios complementarios y enfoque en sostenibilidad.',
			image: '/serviciosVarios.webp',
			icon: 'groups_2',
			scope: 'Auxiliares, residuos y asesoria ambiental'
		}
	];
</script>

<section id="servicios" class="px-4 py-12 max-w-7xl mx-auto">
	<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-2 mb-8">
		<div>
			<h3 class="text-white text-2xl font-light tracking-wide">
				Servicios <span class="font-bold text-gold-accent">integrales</span>
			</h3>
			<p class="text-sm text-gray-400 mt-2 max-w-2xl">
				Soluciones diseñadas para organizaciones que necesitan operacion continua, calidad y
				cumplimiento.
			</p>
		</div>
		<a
			href="#contacto"
			class="text-xs text-gray-300 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wide font-semibold"
		>
			Solicitar propuesta <span class="material-symbols-outlined text-[16px]">chevron_right</span>
		</a>
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
					<p class="text-[11px] font-semibold text-primary uppercase tracking-wider">
						{service.scope}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
