
document.addEventListener("DOMContentLoaded", () => {

    // CINCO IMÁGENES POR SERVICIO

    const imagenes = {

        grabado: [
            "imagenes/grabado1.png",
            "imagenes/grabado2.png",
            "imagenes/grabado3.png",
            "imagenes/grabado4.png",
            "imagenes/grabado5.png"
        ],

        merchandising: [
            "imagenes/merchandising1.png",
            "imagenes/merchandising2.png",
            "imagenes/merchandising3.png",
            "imagenes/merchandising4.png",
            "imagenes/merchandising5.png"
        ],

        gigantografias: [
            "imagenes/gigantografia1.png",
            "imagenes/gigantografia2.png",
            "imagenes/gigantografia3.png",
            "imagenes/gigantografia4.png",
            "imagenes/gigantografia5.png"
        ],

        letras: [
            "imagenes/letras1.png",
            "imagenes/letras2.png",
            "imagenes/letras3.png",
            "imagenes/letras4.png"
        ],

        volantes: [
            "imagenes/volantes1.png",
            "imagenes/volantes2.png",
            "imagenes/volantes3.png",
            "imagenes/volantes4.png",
            "imagenes/volantes5.png"
        ],

        afiches: [
            "imagenes/afiches1.png",
            "imagenes/afiches2.png",
            "imagenes/afiches3.png",
            "imagenes/afiches4.png",
            "imagenes/afiches5.png"
        ]

    };


    // CONFIGURAR CADA CARRUSEL

    document
        .querySelectorAll(".service-card[data-service]")
        .forEach(card => {

            const servicio = card.dataset.service;
            const fotos = imagenes[servicio];

            const contenedor =
                card.querySelector(".carousel-images");

            if (!fotos || !fotos.length || !contenedor) {
                return;
            }

            // LIMPIAR CONTENEDOR

            contenedor.replaceChildren();

            let posicion = 0;


            // CREAR FOTOGRAFÍAS

            const slides = fotos.map((ruta, indice) => {

                const img = document.createElement("img");

                img.src = ruta;

                img.alt =
                    `${servicio} - Imagen ${indice + 1}`;

                img.className =
                    indice === 0
                        ? "carousel-img active"
                        : "carousel-img";

                if (indice !== 0) {
                    img.loading = "lazy";
                }

                contenedor.appendChild(img);

                return img;

            });


            // CAMBIAR IMAGEN

            function mostrarImagen(indice) {

                slides[posicion].classList.remove("active");

                posicion =
                    (indice + slides.length) % slides.length;

                slides[posicion].classList.add("active");

            }


            // FLECHA IZQUIERDA

            const anterior = card.querySelector(".prev");

            if (anterior) {

                anterior.addEventListener("click", () => {

                    mostrarImagen(posicion - 1);

                });

            }


            // FLECHA DERECHA

            const siguiente = card.querySelector(".next");

            if (siguiente) {

                siguiente.addEventListener("click", () => {

                    mostrarImagen(posicion + 1);

                });

            }


            // BUCLE INFINITO CADA 3 SEGUNDOS

            if (slides.length > 1) {

                setInterval(() => {

                    mostrarImagen(posicion + 1);

                }, 3000);

            }

        });

});
