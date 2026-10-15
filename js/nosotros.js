
document.addEventListener('DOMContentLoaded', () => {

    /* =================================
       MENÚ RESPONSIVE
    ================================= */

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (toggle && nav) {

        const cerrarMenu = () => {
            nav.classList.remove('open');

            toggle.setAttribute(
                'aria-expanded',
                'false'
            );

            toggle.setAttribute(
                'aria-label',
                'Abrir menú'
            );
        };

        toggle.addEventListener('click', () => {

            const abierto = nav.classList.toggle('open');

            toggle.setAttribute(
                'aria-expanded',
                String(abierto)
            );

            toggle.setAttribute(
                'aria-label',
                abierto ? 'Cerrar menú' : 'Abrir menú'
            );

        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', cerrarMenu);
        });

        document.addEventListener('keydown', e => {

            if (
                e.key === 'Escape' &&
                nav.classList.contains('open')
            ) {
                cerrarMenu();
                toggle.focus();
            }

        });
    }

    /* =================================
       FORMULARIO DE COTIZACIÓN
    ================================= */

    const formulario = document.getElementById(
        'formularioCotizacion'
    );

    if (formulario) {

        formulario.addEventListener('submit', e => {

            e.preventDefault();

            if (!formulario.reportValidity()) {
                return;
            }

            const obtener = id => {
                return document.getElementById(id).value.trim();
            };

            const nombre = obtener('nombre');
            const telefono = obtener('telefono');
            const correo = obtener('correo');
            const servicio = obtener('servicio');
            const mensaje = obtener('mensaje');

            if (
                !nombre ||
                !telefono ||
                !correo ||
                !servicio ||
                !mensaje
            ) {
                return;
            }

            const texto =
`Hola, INNOVA STUDIO.

SOLICITUD DE COTIZACIÓN

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Servicio: ${servicio}
Proyecto: ${mensaje}`;

            const enlaceWhatsApp =
                'https://wa.me/51981228456?text=' +
                encodeURIComponent(texto);

            window.open(
                enlaceWhatsApp,
                '_blank',
                'noopener,noreferrer'
            );

        });
    }

});
