const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");

const steps = [
    {
        gif: "recursos/rusure.gif",
        text: "¿Quisiste decir que SÍ, verdad? 🤨",
        yesStyle: { height: "65%", width: "60%" },
        noStyle: { width: "30%" }
    },
    {
        gif: "recursos/3shocked-1.gif",
        text: "Se te resbaló el dedo, ¿no? 🥹",
        yesStyle: { height: "70%", width: "70%" },
        noStyle: { width: "20%" }
    },
    {
        gif: "recursos/4.crying.gif",
        text: "Voy a llorar 😭",
        yesStyle: { height: "80%", width: "80%" },
        noStyle: { width: "10%", fontSize: "4vh" } 
    },
    {
        gif: "recursos/5.crying.gif",
        text: "Por favorcito 🥺😘",
        yesStyle: { height: "90%", width: "96%" },
        noStyle: { display: "none" } 
    }
];

let stepIndex = 0;

// Precarga de imágenes para que no haya parpadeos negros al cambiar de GIF
const allGifs = steps.map(step => step.gif).concat("recursos/cat-heart.gif");
allGifs.forEach(src => {
    const img = new Image();
    img.src = src;
});

// Lógica del botón NO
noBtn.addEventListener("click", () => {
    if (stepIndex < steps.length) {
        const currentStep = steps[stepIndex];

        gif.src = currentStep.gif;

        if (text) {
            text.innerText = currentStep.text;
        }

        if (currentStep.yesStyle) {
            Object.assign(yesBtn.style, currentStep.yesStyle);
        }

        if (currentStep.noStyle) {
            Object.assign(noBtn.style, currentStep.noStyle);
        }

        stepIndex++;
    }
});

// Lógica del botón SÍ (EL FINAL)
yesBtn.addEventListener("click", () => {
    // 1. Cambiamos al GIF final de amor
    gif.src = "recursos/cat-heart.gif";
    
    // 2. Cambiamos el texto
    text.innerHTML = `
    <p style="margin-bottom: 15px;">Tu respuesta significa mucho para mí, pero más aún la idea de todo lo que podemos construir juntos.</p>
    <p style="margin-bottom: 15px;">Me nace cuidarte, hacerte sentir bien, y voy a demostrarte cada día que tomaste una buena decisión.</p>
    <p>No quiero correr, quiero que lo nuestro crezca bien, con ganas, con verdad… paso a paso, pero siempre contigo. ❤️</p>
`;
text.style.fontSize = "1.1rem"; // Un tamaño ligeramente menor para que sea elegante
text.style.textAlign = "center";
    
    // 3. Mostramos la animación de fondo (video de corazones)
    const videoBg = document.querySelector('.video-background');
    if (videoBg) {
        videoBg.style.display = 'block'; // Asegúrate de que en CSS esté como display: none al inicio
    }

    // 4. Ocultamos los botones porque ya se tomó la decisión
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});