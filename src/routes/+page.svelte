<script>
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Trust from '$lib/components/Trust.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
</script>

<Hero />
<Services />
<Trust />
<Testimonials />

<!-- Sticky Floating CTA for Mobile -->
<div
	class="fixed bottom-6 left-0 right-0 z-40 flex justify-center px-4 md:hidden pointer-events-none"
>
	<button
		class="pointer-events-auto bg-primary/90 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-glow flex items-center gap-2 text-sm font-bold animate-fade-in-up border border-primary-dark"
	>
		<span class="material-symbols-outlined text-[20px]">calendar_month</span>
		Agendar Cita
	</button>
</div>
