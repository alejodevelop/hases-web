<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let interval: any;

	let images = [
		{
			src: 'jardinero-weedwacker-cortando-cesped-jardin.jpg',
			alt: 'Image 1',
			info: 'Servicios de jardineria'
		},
		{ src: 'pool-5055009.jpg', alt: 'Image 3', info: 'Mantenimiento de piscinas' },
		{ src: 'side-view-people-cleaning-building.jpg', alt: 'Image 4', info: 'Servicios de Limpieza' }
	];

	const next = () => {
		currentIndex = (currentIndex + 1) % images.length;
		resetInterval();
	};

	const prev = () => {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		resetInterval();
	};

	const resetInterval = () => {
		clearInterval(interval);
		interval = setInterval(next, 6000);
	};

	onMount(() => {
		interval = setInterval(next, 6000);
		return () => clearInterval(interval);
	});
</script>

<section>
	<div id="intro" class="carousel carousel-fade">
		<div class="carousel-inner">
			{#each images as { src, alt, info }, i}
				<div
					class="carousel-item {i === currentIndex ? 'active' : ''}"
					style="background-image: url({src});"
				>
					<div class="info-container {i === currentIndex ? 'animate' : ''}">
						<div class="info">{info}</div>
					</div>
				</div>
			{/each}
		</div>

		<ul class="carousel-indicators">
			{#each images as _, i}
				<button
					type="button"
					class={i === currentIndex ? 'active' : ''}
					on:click={() => (currentIndex = i)}
					on:keydown={(e) => e.key === 'Enter' && (currentIndex = i)}
				></button>
			{/each}
		</ul>

		<button class="prev" on:click={prev}>&#10094;</button>
		<button class="next" on:click={next}>&#10095;</button>
	</div>
</section>

<style>
	#intro {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}

	.carousel-inner {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}

	.carousel-item {
		position: absolute;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.carousel-item::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5); /* Efecto oscuro */
		z-index: 1;
	}

	.carousel-item.active {
		opacity: 1;
	}
	.carousel-indicators {
		display: flex;
		justify-content: center;
		position: absolute;
		bottom: 10px;
		width: 100%;
		padding: 0;
		margin: 0;
	}

	.carousel-indicators button {
		background-color: #fff;
		margin: 10px 3px;
		padding: 0;
		cursor: pointer;
		opacity: 0.5;
		border: none;
		border-radius: 0;
		width: 40px;
		height: 3px;
		z-index: 2;
	}

	.carousel-indicators button.active {
		opacity: 1;
	}

	.prev,
	.next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 10px;
		cursor: pointer;
		font-size: 18px;
		z-index: 2;
		opacity: 0.8;
		transition: opacity 0.3s;
	}

	.prev:hover,
	.next:hover {
		opacity: 1;
	}

	.prev {
		left: 10px;
	}

	.next {
		right: 10px;
	}

	.info-container {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 50px;
		font-weight: bolder;
		padding: 10px;
		text-align: center;
		z-index: 2;
		opacity: 0;
		transition:
			opacity 1s ease-in-out,
			top 1s ease-in-out;
	}

	.info-container.animate {
		opacity: 1;
		top: 50%;
	}

	.info {
	}
</style>
