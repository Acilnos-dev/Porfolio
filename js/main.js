const boton = document.querySelector("#boton-mas");
const texto = document.querySelector("#texto-extra");

boton.addEventListener("click", function () {
    texto.classList.toggle("oculto");

    if (texto.classList.contains("oculto")) {
        boton.textContent = "Leer más";
    } else {
        boton.textContent = "Leer menos";
    }
});

const proyectos = [
    {
        titulo: "Mi primera página web",
        descripcion: "Este portfolio, hecho con HTML, CSS y JavaScript.",
        enlace: "proyectos/proyecto-1.html"
    },

    {
        titulo: "Controles on la camara",
        descripcion: "Un poryecto que se basaba en poder controlar el ordenador con geston con la camara.",
        enlace: "proyectos/proyecto-1.html"
    },

    {
        titulo: "R.O.C.K.Y",
        descripcion: "Una IA en local parecida a JARVIS",
        enlace: "proyectos/proyecto-1.html"
    }
];

const contenedor = document.querySelector("#lista-proyectos");

proyectos.forEach(function (proyecto) {
    const tarjeta = document.createElement("article");

    const titulo = document.createElement("h3");
    titulo.textContent = proyecto.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = proyecto.descripcion;

    const enlace = document.createElement("a");
    enlace.href = proyecto.enlace;
    enlace.textContent = "Ver proyecto";

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(enlace);
    contenedor.appendChild(tarjeta);
});