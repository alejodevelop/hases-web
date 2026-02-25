<script lang="ts">
	const values = [
		{
			title: 'Responsabilidad',
			description: 'Cumplimos cada compromiso operativo con enfoque en resultados y continuidad.',
			icon: 'task_alt'
		},
		{
			title: 'Excelencia',
			description: 'Estandarizamos procesos para asegurar calidad y consistencia en cada servicio.',
			icon: 'military_tech'
		},
		{
			title: 'Innovacion',
			description: 'Incorporamos mejores practicas y herramientas para aumentar la eficiencia.',
			icon: 'neurology'
		},
		{
			title: 'Sostenibilidad',
			description: 'Aplicamos criterios de economia circular y gestion responsable de recursos.',
			icon: 'recycling'
		},
		{
			title: 'Respeto',
			description: 'Construimos relaciones transparentes con clientes, colaboradores y comunidad.',
			icon: 'handshake'
		},
		{
			title: 'Trabajo en equipo',
			description: 'Coordinamos talento humano capacitado para operar de forma segura y oportuna.',
			icon: 'groups'
		}
	];
</script>

<section
	id="nosotros"
	class="bg-surface-dark py-16 px-6 my-8 mx-4 rounded-3xl relative overflow-hidden max-w-7xl md:mx-auto"
>
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
			Quienes somos
		</span>
		<h3 class="text-white text-2xl md:text-3xl font-light mb-8 leading-snug">
			Aliados estrategicos en <span class="text-white font-bold border-b border-primary"
				>aseo, mantenimiento y operacion</span
			> para organizaciones de Neiva y el Huila.
		</h3>
		<p class="mx-auto max-w-3xl text-sm md:text-base text-gray-300 leading-relaxed">
			HASES INGENIERIA S.A.S. integra calidad operativa, capacitacion del talento humano y
			compromiso ambiental para entregar soluciones confiables, sostenibles y alineadas con la
			mejora continua.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
			{#each values as value}
				<article
					class="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-background-dark/70 p-5"
				>
					<div class="p-3 rounded-full bg-background-dark border border-white/10 text-primary">
						<span class="material-symbols-outlined">{value.icon}</span>
					</div>
					<h5 class="text-white font-bold">{value.title}</h5>
					<p class="text-gray-400 text-sm">{value.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
