const boton = document.querySelector("#boton-mas");
const texto = document.querySelector("#texto-extra");

boton.addEventListener("click", function () {
    texto.classList.toggle("oculto");
});