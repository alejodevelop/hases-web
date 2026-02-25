<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer id="contacto" class="bg-surface-dark border-t border-white/5 py-12 px-6">
	<div class="max-w-7xl mx-auto">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
			<div>
				<h2 class="text-white text-2xl font-bold tracking-[0.1em] uppercase mb-2">Hases</h2>
				<p class="text-gold-accent text-xs uppercase tracking-widest mb-4">Ingenieria S.A.S.</p>
				<p class="text-sm text-gray-400 leading-relaxed">
					Soluciones integrales de aseo, mantenimiento, jardinería y gestión ambiental para
					organizaciones en Neiva y el Huila.
				</p>
			</div>

			<div>
				<h3 class="text-sm font-bold uppercase tracking-wide text-white mb-4">Contacto oficial</h3>
				<ul class="space-y-3 text-sm text-gray-300">
					<li class="flex items-start gap-2">
						<span class="material-symbols-outlined text-primary text-[18px]">call</span>
						<div>
							<a class="hover:text-white transition-colors" href="tel:+573103133521">310 313 3521</a
							>
							<span class="mx-1 text-gray-500">|</span>
							<a class="hover:text-white transition-colors" href="tel:+573175567755">317 556 7755</a
							>
						</div>
					</li>
					<li class="flex items-start gap-2">
						<span class="material-symbols-outlined text-primary text-[18px]">mail</span>
						<a
							class="hover:text-white transition-colors break-all"
							href="mailto:hasesingenieriasas@gmail.com"
						>
							hasesingenieriasas@gmail.com
						</a>
					</li>
					<li class="flex items-start gap-2">
						<span class="material-symbols-outlined text-primary text-[18px]">location_on</span>
						<span>Carrera 19 #5B-25, Barrio Calixto Leiva, Neiva - Huila</span>
					</li>
					<li class="flex items-start gap-2">
						<span class="material-symbols-outlined text-primary text-[18px]">language</span>
						<a
							class="hover:text-white transition-colors"
							href="https://www.hases.co"
							target="_blank"
							rel="noopener noreferrer"
						>
							www.hases.co
						</a>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="text-sm font-bold uppercase tracking-wide text-white mb-4">Navegación</h3>
				<div class="flex flex-col gap-2 text-sm text-gray-300">
					<a class="hover:text-primary transition-colors" href="#inicio">Inicio</a>
					<a class="hover:text-primary transition-colors" href="#servicios">Servicios</a>
					<a class="hover:text-primary transition-colors" href="#nosotros">Nosotros</a>
					<a class="hover:text-primary transition-colors" href="#clientes">Clientes</a>
					<a class="hover:text-primary transition-colors" href="#contacto">Contacto</a>
				</div>
			</div>
		</div>

		<div class="border-t border-white/5 pt-8 text-center flex flex-col gap-3">
			<p class="text-gray-500 text-xs">
				© {currentYear} HASES INGENIERIA S.A.S. | NIT 901863320-3. Todos los derechos reservados.
			</p>
			<div class="flex justify-center gap-4 text-xs text-gray-500">
				<a class="hover:text-gray-300 transition-colors" href="/privacidad">Privacidad</a>
				<a class="hover:text-gray-300 transition-colors" href="/terminos">Términos</a>
			</div>
		</div>
	</div>
</footer>
