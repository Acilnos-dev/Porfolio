const boton = document.querySelector("#boton-mas");
const texto = document.querySelector("#texto-extra");

boton.addEventListener("click", function () {
    texto.classList.toggle("oculto");
    if (texto.classList.contains("oculto")) {
        boton.textContent="Leer más";
    } else {
        boton.textContent="Leer menos";
    }
});