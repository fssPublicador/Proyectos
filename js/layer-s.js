// Easter Egg 1: Mensaje en consola
export function logMessage() {
    console.log('%cPersonalización realizada por LeoCuj.', 'color: blue; font-size: 16px;');
}

// Easter Egg 2: Sección oculta en HTML mejorada
export function displaySecretDiv() {
    const secretDiv = document.createElement('div');
    secretDiv.id = 'easterEgg';
    secretDiv.style.position = 'fixed';
    secretDiv.style.bottom = '10px'; // Posición en la parte inferior
    secretDiv.style.left = '50%'; // Centrado horizontalmente
    secretDiv.style.transform = 'translateX(-50%)'; // Ajuste para que no se corte la caja
    secretDiv.style.backgroundColor = '#0078d7';
    secretDiv.style.color = 'white';
    secretDiv.style.padding = '10px';
    secretDiv.style.borderRadius = '5px';
    secretDiv.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    secretDiv.style.zIndex = '9999'; // Asegurar que se muestre sobre otros elementos
    secretDiv.style.opacity = '0'; // Inicia invisible
    secretDiv.style.transition = 'opacity 0.5s ease-in-out'; // Animación de entrada/salida
    secretDiv.style.textAlign = 'center'; // Centra el texto
    secretDiv.style.lineHeight = '1.5'; // Mejora la legibilidad al alinear el texto verticalmente
    secretDiv.innerHTML = '<strong>Sitio en Construcción</strong><br>Diseño y Planificación<br>Fondo Social de Solidaridad.';
    document.body.appendChild(secretDiv);

    // Mostrar el div con animación
    setTimeout(() => {
        secretDiv.style.opacity = '1';
    }, 500);

    // Ocultar automáticamente después de unos segundos
    setTimeout(() => {
        secretDiv.style.opacity = '0';
        setTimeout(() => {
            secretDiv.style.display = 'none'; // Ocultar del flujo DOM
        }, 500); // Coincide con la duración de la transición
    }, 5000);
}

// Easter Egg 3: Interacción especial
export function setupKeyboardInteraction() {
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.altKey && event.key === 'j') {
            alert('¡Personalización realizada por LeoCuj!');
        }
    });
}
