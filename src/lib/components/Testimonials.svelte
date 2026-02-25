<script lang="ts">
	import { onMount } from 'svelte';

	type ClientStory = {
		name: string;
		image: string;
		alt: string;
		comment: string;
		context: string;
	};

	type TransitionPhase = 'idle' | 'out' | 'in';

	let currentIndex = $state(0);
	let transitionPhase = $state<TransitionPhase>('idle');
	let transitionMs = $state(340);
	let reducedMotion = $state(false);
	let autoAdvanceTimer: ReturnType<typeof setInterval> | undefined;
	const imageLoadCache = new Map<string, Promise<void>>();

	const AUTO_ADVANCE_MS = 5000;
	const DESKTOP_TRANSITION_MS = 520;
	const TABLET_TRANSITION_MS = 430;
	const MOBILE_TRANSITION_MS = 320;

	const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

	const preloadImage = (src: string) => {
		const cached = imageLoadCache.get(src);
		if (cached) return cached;

		const promise = new Promise<void>((resolve) => {
			const image = new Image();
			let settled = false;

			const done = () => {
				if (settled) return;
				settled = true;
				resolve();
			};

			image.onload = done;
			image.onerror = done;
			image.src = src;

			if (typeof image.decode === 'function') {
				image.decode().then(done).catch(done);
			} else if (image.complete) {
				done();
			}
		});

		imageLoadCache.set(src, promise);
		return promise;
	};

	const preloadAround = (index: number) => {
		const normalized = (index + clients.length) % clients.length;
		const next = (normalized + 1) % clients.length;
		void preloadImage(clients[normalized].image);
		void preloadImage(clients[next].image);
	};

	const clients: ClientStory[] = [
		{
			name: 'Condominio Campestre Altos de la Pradera',
			image: '/altos-pradera.webp',
			alt: 'Condominio Campestre Altos de la Pradera',
			comment:
				'Acompañamiento constante en aseo de zonas comunes y una operación ordenada para el cuidado diario de la copropiedad.',
			context: 'Condominio campestre'
		},
		{
			name: 'Condominio Encenillo Reservado',
			image: '/encenillo-reservado.webp',
			alt: 'Condominio Encenillo Reservado',
			comment:
				'Soporte operativo confiable para mantener la presentación, limpieza y funcionalidad de espacios comunes.',
			context: 'Condominio residencial'
		},
		{
			name: 'Conjunto Reservas de Caña Brava',
			image: '/reservas-cana-brava.webp',
			alt: 'Conjunto Reservas de Caña Brava',
			comment:
				'Atención oportuna para rutinas de aseo y mantenimiento, con continuidad en los estándares de servicio.',
			context: 'Conjunto residencial'
		},
		{
			name: 'Conjunto Turipana',
			image: '/turipana-neiva.webp',
			alt: 'Conjunto Turipana',
			comment:
				'Coordinación efectiva del servicio para apoyar la operación diaria y el bienestar de residentes y visitantes.',
			context: 'Conjunto residencial'
		},
		{
			name: 'Condominio Zaragoza',
			image: '/zaragoza.webp',
			alt: 'Condominio Zaragoza',
			comment:
				'Gestión integral enfocada en limpieza, presentación y acompañamiento permanente a la administración.',
			context: 'Condominio residencial'
		},
		{
			name: 'Condominio Paseo de la Castellana',
			image: '/paseo-castellana.webp',
			alt: 'Condominio Paseo de la Castellana',
			comment:
				'Servicio profesional orientado a mantener espacios seguros, limpios y listos para la operación continua.',
			context: 'Condominio residencial'
		},
		{
			name: 'Condominio Bosques de Cantabria',
			image: '/bosques-cantabria.webp',
			alt: 'Condominio Bosques de Cantabria',
			comment:
				'Operación consistente con enfoque en detalle para conservar la calidad de zonas comunes y exteriores.',
			context: 'Condominio residencial'
		},
		{
			name: 'Condominio Hacienda San Miguel',
			image: '/hacienda-sanmiguel.webp',
			alt: 'Condominio Hacienda San Miguel',
			comment:
				'Un esquema de trabajo estable que aporta orden, cumplimiento y respuesta oportuna en actividades programadas.',
			context: 'Condominio residencial'
		},
		{
			name: 'Condominio San Jerónimo',
			image: '/san-jeronimo.webp',
			alt: 'Condominio San Jerónimo',
			comment:
				'Atención cercana y planificada para sostener la calidad operativa en las diferentes áreas del conjunto.',
			context: 'Condominio residencial'
		},
		{
			name: 'Condominio Lucca',
			image: '/lucca.webp',
			alt: 'Condominio Lucca',
			comment:
				'Respaldo integral para la administración con procesos claros y seguimiento continuo del servicio.',
			context: 'Condominio residencial'
		}
	];

	const clearAutoAdvance = () => {
		if (!autoAdvanceTimer) return;
		clearInterval(autoAdvanceTimer);
		autoAdvanceTimer = undefined;
	};

	const startAutoAdvance = () => {
		clearAutoAdvance();
		autoAdvanceTimer = setInterval(() => {
			void goTo(currentIndex + 1);
		}, AUTO_ADVANCE_MS);
	};

	const goTo = async (index: number, options?: { fromUser?: boolean }) => {
		const nextIndex = (index + clients.length) % clients.length;
		const fromUser = options?.fromUser ?? false;

		if (transitionPhase !== 'idle') return;
		if (nextIndex === currentIndex) return;

		if (fromUser) {
			startAutoAdvance();
		}

		if (reducedMotion || transitionMs === 0) {
			await preloadImage(clients[nextIndex].image);
			currentIndex = nextIndex;
			preloadAround(nextIndex);
			return;
		}

		transitionPhase = 'out';
		await wait(transitionMs);
		await preloadImage(clients[nextIndex].image);

		currentIndex = nextIndex;
		preloadAround(nextIndex);
		transitionPhase = 'in';

		await wait(transitionMs);
		transitionPhase = 'idle';
	};

	const next = () => {
		void goTo(currentIndex + 1, { fromUser: true });
	};

	const previous = () => {
		void goTo(currentIndex - 1, { fromUser: true });
	};

	const syncMotionPreferences = () => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (reducedMotion) {
			transitionMs = 0;
			return;
		}

		if (window.innerWidth >= 1024) {
			transitionMs = DESKTOP_TRANSITION_MS;
			return;
		}

		if (window.innerWidth >= 768) {
			transitionMs = TABLET_TRANSITION_MS;
			return;
		}

		transitionMs = MOBILE_TRANSITION_MS;
	};

	onMount(() => {
		syncMotionPreferences();
		preloadAround(currentIndex);
		startAutoAdvance();

		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const onMotionChange = () => syncMotionPreferences();
		const onResize = () => syncMotionPreferences();

		mediaQuery.addEventListener('change', onMotionChange);
		window.addEventListener('resize', onResize);

		return () => {
			clearAutoAdvance();
			mediaQuery.removeEventListener('change', onMotionChange);
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<section id="clientes" class="px-6 py-16 text-center max-w-6xl mx-auto">
	<span
		class="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gold-accent text-xs font-bold tracking-widest uppercase mb-6"
	>
		Experiencia comprobada
	</span>
	<h3 class="text-white text-2xl md:text-3xl font-light mb-4">
		Organizaciones que confían en HASES
	</h3>
	<p class="mx-auto max-w-2xl text-sm md:text-base text-gray-400 mb-8">
		Acompañamos clientes en servicios de aseo, mantenimiento y gestión operativa con enfoque en
		calidad.
	</p>

	<div
		class="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-dark shadow-xl min-h-[540px] md:h-[420px]"
	>
		<article
			class="grid h-full items-stretch md:grid-cols-[1.2fr_1fr] transition-opacity ease-out {transitionPhase ===
			'out'
				? 'opacity-0'
				: 'opacity-100'}"
			style="transition-duration: {transitionMs}ms; transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);"
		>
			<div class="relative h-72 md:h-full min-h-[280px] overflow-hidden">
				<img
					src={clients[currentIndex].image}
					alt={clients[currentIndex].alt}
					class="h-full w-full object-cover"
					loading="lazy"
					decoding="async"
					width="960"
					height="720"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/35 to-transparent"
				></div>
				<div class="absolute inset-x-0 bottom-0 p-5 text-left">
					<p class="text-[11px] font-semibold uppercase tracking-widest text-gold-accent mb-2">
						{clients[currentIndex].context}
					</p>
					<h4 class="client-name text-white text-lg md:text-xl font-semibold leading-snug">
						{clients[currentIndex].name}
					</h4>
				</div>
			</div>

			<div class="h-full flex flex-col justify-center p-6 md:p-8 text-left bg-background-dark/40">
				<span class="material-symbols-outlined text-gold-accent text-[28px] mb-3">format_quote</span
				>
				<p class="comment-clamp text-gray-200 text-base md:text-lg leading-relaxed">
					{clients[currentIndex].comment}
				</p>
				<div class="mt-6 border-t border-white/10 pt-4">
					<p class="text-sm font-semibold text-white">{clients[currentIndex].name}</p>
					<p class="text-xs text-gray-400 uppercase tracking-wide">Cliente real HASES</p>
				</div>
			</div>
		</article>
	</div>

	<div class="mt-6 flex items-center justify-center gap-3">
		<button
			type="button"
			onclick={previous}
			class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
			aria-label="Cliente anterior"
		>
			<span class="material-symbols-outlined text-[18px]">chevron_left</span>
		</button>

		<div class="flex justify-center gap-2">
			{#each clients as client, i (client.name)}
				<button
					type="button"
					class="h-1.5 rounded-full transition-all duration-300 {i === currentIndex
						? 'w-6 bg-gold-accent'
						: 'w-1.5 bg-white/20 hover:bg-white/40'}"
					aria-label="Ver cliente {i + 1}: {client.name}"
					onclick={() => void goTo(i, { fromUser: true })}
				></button>
			{/each}
		</div>

		<button
			type="button"
			onclick={next}
			class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
			aria-label="Siguiente cliente"
		>
			<span class="material-symbols-outlined text-[18px]">chevron_right</span>
		</button>
	</div>

	<p class="mt-5 text-xs text-gray-500 uppercase tracking-wide">
		Muestra de clientes reales atendidos en Neiva y su área metropolitana.
	</p>
</section>

<style>
	.client-name {
		display: -webkit-box;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		min-height: 3.2rem;
	}

	.comment-clamp {
		display: -webkit-box;
		line-clamp: 5;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	@media (min-width: 768px) {
		.comment-clamp {
			line-clamp: 6;
			-webkit-line-clamp: 6;
		}
	}
</style>
