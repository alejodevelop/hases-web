<script lang="ts">
	const navLinks = [
		{ label: 'Inicio', href: '#inicio' },
		{ label: 'Servicios', href: '#servicios' },
		{ label: 'Nosotros', href: '#nosotros' },
		{ label: 'Clientes', href: '#clientes' },
		{ label: 'Contacto', href: '#contacto' }
	];

	let mobileMenuOpen = $state(false);

	const toggleMenu = () => {
		mobileMenuOpen = !mobileMenuOpen;
	};

	const scrollToSection = (e: MouseEvent, href: string) => {
		e.preventDefault();
		e.stopPropagation();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		mobileMenuOpen = false;
	};
</script>

<!-- Desktop & Mobile Header Bar -->
<header
	class="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5 transition-all duration-300"
>
	<div class="max-w-7xl mx-auto flex items-center justify-between px-5 py-3">
		<!-- Logo -->
		<a
			href="#inicio"
			class="flex flex-col items-start shrink-0"
			onclick={(e) => scrollToSection(e, '#inicio')}
		>
			<span class="text-white text-lg font-bold tracking-[0.1em] uppercase leading-tight"
				>Hases</span
			>
			<span class="text-[10px] text-gold-accent tracking-widest uppercase">Premium Home</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex items-center gap-8">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={(e) => scrollToSection(e, link.href)}
					class="text-sm text-gray-300 hover:text-white transition-colors tracking-wide font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- CTA (Desktop) -->
		<div class="hidden md:flex items-center gap-4">
			<a
				href="#contacto"
				onclick={(e) => scrollToSection(e, '#contacto')}
				class="text-xs font-bold text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-full transition-all hover:scale-105 tracking-wide uppercase"
			>
				Cotizar
			</a>
			<button class="text-gray-400 hover:text-white transition-colors" aria-label="Mi cuenta">
				<span class="material-symbols-outlined text-[22px]">account_circle</span>
			</button>
		</div>

		<!-- Mobile: Hamburger Toggle -->
		<button
			class="md:hidden text-white hover:text-primary transition-colors"
			onclick={toggleMenu}
			aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
		>
			<span class="material-symbols-outlined text-[28px]">
				{mobileMenuOpen ? 'close' : 'menu'}
			</span>
		</button>
	</div>
</header>

<!-- Mobile Full-Screen Overlay (OUTSIDE header to avoid clipping) -->
{#if mobileMenuOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="md:hidden"
		style="position:fixed; inset:0; z-index:45; background:#101622; animation: mobileMenuFadeIn 0.3s ease-out;"
		onkeydown={(e) => {
			if (e.key === 'Escape') mobileMenuOpen = false;
		}}
	>
		<!-- Close button at top right -->
		<div style="position:absolute; top:16px; right:16px;">
			<button
				class="text-white hover:text-primary transition-colors"
				onclick={toggleMenu}
				aria-label="Cerrar menú"
			>
				<span class="material-symbols-outlined text-[32px]">close</span>
			</button>
		</div>

		<!-- Centered nav content -->
		<nav class="flex flex-col items-center justify-center gap-7 h-full px-8">
			{#each navLinks as link}
				<a
					href={link.href}
					class="text-3xl text-gray-200 hover:text-white font-light tracking-wide transition-colors"
					onclick={(e) => scrollToSection(e, link.href)}
				>
					{link.label}
				</a>
			{/each}
			<div class="h-px w-20 bg-white/10 my-1"></div>
			<a
				href="#contacto"
				class="text-sm font-bold text-white bg-primary hover:bg-primary-dark px-8 py-3.5 rounded-full transition-all tracking-wide uppercase"
				onclick={(e) => scrollToSection(e, '#contacto')}
			>
				Solicitar Presupuesto
			</a>
		</nav>
	</div>
{/if}

<style>
	@keyframes mobileMenuFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
