<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    let currentIndex = 0;
    let interval: any;
    let fadeOut = false;

    const clientes = [
        { name: 'Reservas de Caña Brava', logo: 'reservasCanaBrava.webp', testimonial: 'Excelente servicio y mantenimiento de áreas verdes.' },
        { name: 'Altos de la pradera', logo: 'altosPradera.webp', testimonial: 'Siempre puntuales y profesionales. Recomendados.' },
        { name: 'Bambú', logo: 'bambu.webp', testimonial: 'Nuestra piscina se mantiene impecable gracias a ellos.' },
        { name: 'San Pablo', logo: 'sanPablo.webp', testimonial: 'Calidad y atención prioritaria. Estamos muy satisfechos.' }
    ];

    const startCarousel = () => {
        interval = setInterval(() => {
            fadeOut = true;

            // Usar requestAnimationFrame para mejorar la animación
            requestAnimationFrame(() => {
                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % clientes.length;
                    fadeOut = false;
                }, 500); // Tiempo para la transición de desvanecimiento
            });
        }, 5000); // Cambia de cliente cada 5 segundos
    };

    onMount(() => {
        startCarousel();
    });

    onDestroy(() => {
        clearInterval(interval);
    });
</script>

<section class="clientes-section">
    <h2 class="titulo-clientes">Nuestros Clientes</h2>
    
    <div class="carrusel-container">
        <div class="carrusel-clientes">
            <div class="fade {fadeOut ? 'fade-out' : 'fade-in'}">
                <img src={clientes[currentIndex].logo} alt={clientes[currentIndex].name} class="cliente-logo" />
            </div>
        </div>
        <div class="testimonios">
            <div class="fade {fadeOut ? 'fade-out' : 'fade-in'}">
                <blockquote>{clientes[currentIndex].testimonial}</blockquote>
                <cite>{clientes[currentIndex].name}</cite>
            </div>
        </div>
    </div>
</section>

<style>
    .clientes-section {
        padding: 2rem;
        background-color: #f3f3f3;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .titulo-clientes {
        text-align: center;
        font-size: 2.8rem;
        color: #333;
        margin-bottom: 2.5rem;
        letter-spacing: 0.05rem;
    }

    .carrusel-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    .carrusel-clientes {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 400px;
        height: 200px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        padding: 1rem;
    }

    .cliente-logo {
        width: 100%;
        height: auto;
        border-radius: 10px;
        object-fit: contain; /* Asegura que la imagen se ajuste sin distorsión */
    }

    .testimonios {
        font-size: 1.2rem;
        color: #666;
        text-align: center;
        max-width: 600px;
        background-color: #fff;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    blockquote {
        font-style: italic;
        color: #666;
        margin: 0;
    }

    cite {
        display: block;
        margin-top: 1rem;
        font-size: 1rem;
        color: #999;
    }

    /* Transiciones */
    .fade {
        transition: opacity 0.5s ease;
    }

    .fade-in {
        opacity: 1;
    }

    .fade-out {
        opacity: 0;
    }

    @media (max-width: 768px) {
        .carrusel-container {
            flex-direction: column;
        }

        .carrusel-clientes {
            width: 150px;
            height: 150px;
        }

        .titulo-clientes {
            font-size: 2.2rem;
        }

        .testimonios {
            font-size: 1rem;
            padding: 1rem;
        }
    }
</style>
