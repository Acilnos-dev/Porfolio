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
        titulo: "Proyecto 1",
        descripcion: "Próximamente.",
        enlace: "proyectos/proyecto-1.html"
    },

    {
        titulo: "Proyecto 2",
        descripcion: "Próximamente.",
        enlace: "proyectos/proyecto-2.html"
    },

    {
        titulo: "Proyecto 3",
        descripcion: "Próximamente.",
        enlace: "proyectos/proyecto-3.html"
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

const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        } else {
            entrada.target.classList.remove("visible");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("main section").forEach(function (seccion) {
    seccion.classList.add("revelar");
    observador.observe(seccion);
}, { threshold: 0.2 });