<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const closeMenu = (event: any) => {
		if (isMenuOpen && !event.target.closest('nav')) {
			isMenuOpen = false;
		}
	};

	if (browser) {
		onMount(() => {

			const nav = document.querySelector('nav');
			if (window.scrollY > 200 && nav !== null) {
				nav.classList.add('scrolled');
			}

			window.addEventListener('scroll', () => {
				if (nav !== null) {
					if (window.scrollY > 200) {
						nav.classList.add('scrolled');
					} else {
						nav.classList.remove('scrolled');
					}
				}
			});

			window.addEventListener('click', closeMenu);
		});

		onDestroy(() => {
			window.removeEventListener('click', closeMenu);
		});
	}
</script>

<div>
	<nav>
		<ul class="title">
			<img src="./logoHases-removebg.webp" alt="logo hases" width="50px" height="50px" />
			<li><strong>HASES</strong></li>
		</ul>
		<button class="menu-button" on:click={toggleMenu}> &#9776; </button>
		<ul class="links {isMenuOpen ? 'open' : ''}">
			<li><a href="/" class="contrast">Inicio</a></li>
			<li><a href="/nosotros" class="contrast">Nosotros</a></li>
			<li><a href="/servicios" class="contrast">Servicios</a></li>
			<li><a href="/clientes" class="contrast">Clientes</a></li>
			<li><a href="/contacto" class="contrast">Contacto</a></li>
		</ul>
	</nav>
</div>

<style>
	nav {
		position: fixed;
		top: 0;
		width: 100%;
		padding: 1rem;
		transition: background-color 1s ease;
		opacity: 0.95;
		z-index: 1000;
		background-color: var(--pico-background-color);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	nav:not(.scrolled) {
		background-color: transparent;
		opacity: 1;
		border-bottom: none;
	}

	.title {
		margin-left: 1rem;
		display: inline-block;
		color: #fff;
		font-size: larger;
	}

	.menu-button {
		display: none;
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
	}

	.links {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.links li {
		margin-left: 1rem;
	}

	.contrast {
		text-decoration: none;
		color: #fff;
	}

	.contrast:hover {
		color: #18d26e;
	}

	@media (max-width: 768px) {
		.menu-button {
			display: block;
		}

		.links {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 83px; /* Ajusta según la altura de tu navbar */
			right: 0;
			margin-right: 14px;
			background-color: var(--pico-background-color); /* Fondo más opaco */
			width: 60%;
			text-align: center;
			max-height: 0;
			opacity: 0.9;
			overflow: hidden;
			transition:
				opacity 0.5s ease,
				max-height 0.5s ease;
			box-shadow: var(--pico-background-color) 0px 0px 10px;
		}

		.links.open {
			opacity: 0.9;
			max-height: 500px;
		}

		.links li {
			margin: 1rem 0;
		}
	}
</style>
