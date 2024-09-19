<script>
	// Aquí podrías agregar la lógica para las interacciones si es necesario
</script>

<section class="quienes-somos-section">
	<h1 class="quienes-somos">¿Quiénes Somos?</h1>
	<p class="quienes-somos-text">Tu aliado estratégico en servicios de aseo, mantenimiento y jardinería.</p>
	<div class="valores-container">
		<div class="valor">
			<div class="icono">
				<img src="clock.webp" alt="Rapidez" />
			</div>
			<h2>Rapidez</h2>
			<p>Realizamos nuestros servicios en el menor tiempo posible sin comprometer la calidad.</p>
		</div>

		<div class="valor">
			<div class="icono">
				<img src="affordable.webp" alt="Eficiencia" />
			</div>
			<h2>Eficiencia</h2>
			<p>Maximizamos los recursos para ofrecer el mejor servicio al menor costo.</p>
		</div>

		<div class="valor">
			<div class="icono">
				<img src="dependable.webp" alt="Confianza" />
			</div>
			<h2>Confianza</h2>
			<p>Estamos comprometidos con proveer el mejor de los servicios y atención prioritaria.</p>
		</div>
	</div>
</section>

<style>
	.quienes-somos-section {
		padding: 2rem;
		background-color: #f3f3f3;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.quienes-somos {
		text-align: center;
		font-size: 2.8rem;
		color: #333;
		margin-bottom: 2.5rem;
		letter-spacing: 0.05rem;
	}

	.quienes-somos-text {
		text-align: center;
		margin-top: 1rem;
		font-size: 1.2rem;
		color: #666;
	}

	.valores-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		margin: 2rem 0;
		padding: 1rem;
		background-color: #f9f9f9;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.valor {
		flex: 1 1 30%;
		max-width: 30%;
		text-align: center;
		margin: 1rem;
		padding: 1rem;
		background-color: #fff;
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.valor:hover {
		transform: translateY(-10px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}

	.icono img {
		width: 50px;
		height: 50px;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1rem;
		color: #666;
	}

	@media (max-width: 768px) {
		.valor {
			flex: 1 1 100%;
			max-width: 100%;
		}
	}
</style>
