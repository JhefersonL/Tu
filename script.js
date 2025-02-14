document.addEventListener("DOMContentLoaded", function () { 
    const heartsContainer = document.querySelector(".hearts-container");
    const botonNo = document.getElementById("botonNo");
    const botonSi = document.getElementById("botonSi");
    const descargar = document.getElementById("descargar");

    descargar.style.display = "none";

    // Función para crear corazones animados más grandes
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Entre 2 y 5 segundos
        heart.style.fontSize = (Math.random() * 40 + 20) + "px"; // Ahora los corazones serán de 20px a 60px
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }

    // Crear corazones con menos frecuencia para mejor rendimiento
    setInterval(createHeart, 250);

    // Mover botón "No" al pasar el mouse
    botonNo.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - botonNo.offsetWidth - 20; 
        const maxY = window.innerHeight - botonNo.offsetHeight - 20; 

        let x, y;
        let intentos = 0;

        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
            intentos++;
        } while (
            Math.abs(x - botonSi.offsetLeft) < 120 && 
            Math.abs(y - botonSi.offsetTop) < 80 &&
            intentos < 10
        );

        botonNo.style.position = "absolute";
        botonNo.style.left = `${x}px`;
        botonNo.style.top = `${y}px`;
    });

    // Reproducir música solo cuando presione el botón "Sí"
    const audio = new Audio("Coldplay - Yellow (Official Video).mp3");

    botonSi.addEventListener("click", function () {
        descargar.style.display = "block";
        descargar.style.animation = "fadeIn 1s ease-in-out";

        // Reproducir el audio
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });

        // Cambiar el fondo a amarillo con animación
        document.body.style.animation = "changeToYellow 2s forwards";
    });
});
