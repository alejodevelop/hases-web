<script>
	// Aquí podrías agregar lógica o interactividad según lo necesites
</script>

<section class="servicios-section">
	<h2 class="titulo-servicios">Nuestros Servicios</h2>
	<div class="servicios-container">
		<div class="servicio">
			<img src="jardinero.webp" alt="Mantenimiento de Jardines" loading="lazy" />
			<h3>Mantenimiento de Jardines</h3>
			<p>
				Ofrecemos un servicio completo de mantenimiento para que tus áreas verdes luzcan siempre
				impecables y saludables.
			</p>
		</div>

		<div class="servicio">
			<img src="limpiezaPiscina.webp" alt="Mantenimiento de piscinas" loading="lazy" />
			<h3>Mantenimiento de piscinas</h3>
			<p>
				Contamos con personal altamente capacitado para el mantenimiento y cuidado de piscinas,
				incluyendo servicios de salvavidas.
			</p>
		</div>

		<div class="servicio">
			<img src="aseo.webp" alt="Servicio integral de aseo" loading="lazy" />
			<h3>Servicio integral de aseo</h3>
			<p>
				Nos encargamos de la limpieza profunda y mantenimiento de espacios, garantizando ambientes
				impecables.
			</p>
		</div>

		<div class="servicio">
			<img src="serviciosVarios.webp" alt="Servicios varios" loading="lazy" />
			<h3>Servicios varios</h3>
			<p>
				Ofrecemos soluciones personalizadas a través de alianzas con expertos en distintos campos,
				cubriendo cualquier necesidad adicional.
			</p>
		</div>
	</div>
</section>

<style>
	.servicios-section {
		padding: 3rem 1rem;
		background-color: #f9f9f9;
	}

	.titulo-servicios {
		text-align: center;
		font-size: 2.8rem;
		color: #333;
		margin-bottom: 2.5rem;
		letter-spacing: 0.05rem;
	}

	.servicios-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 2rem;
	}

	.servicio {
		background-color: #fff;
		border-radius: 12px;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
		overflow: hidden;
		flex: 1 1 calc(25% - 2rem);
		max-width: calc(25% - 2rem);
		text-align: center;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.servicio:hover {
		transform: translateY(-10px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.servicio img {
		width: 100%;
		height: auto;
		transition: transform 0.3s ease;
	}

	.servicio:hover img {
		transform: scale(1.05);
	}

	.servicio h3 {
		font-size: 1.6rem;
		color: #333;
		margin: 1.5rem 0;
	}

	.servicio p {
		font-size: 1rem;
		color: #555;
		padding: 0 1.5rem 1.5rem;
		text-align: center;
	}

	@media (max-width: 768px) {
		.servicio {
			flex: 1 1 calc(50% - 1rem);
			max-width: calc(50% - 1rem);
		}
	}

	@media (max-width: 480px) {
		.servicio {
			flex: 1 1 100%;
			max-width: 100%;
			margin-bottom: 1.5rem;
		}
	}
</style>
