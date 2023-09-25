window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/carrusel/zona1-298x168.png',
        'img/carrusel/zona2-298x168.png',
        'img/carrusel/zona3-298x168.png',
        'img/carrusel/zona4-298x168.png',
        'img/carrusel/zona5-298x168.png',
        'img/carrusel/zona6-298x168.png',
        'img/carrusel/zona7-298x168.png',
        'img/carrusel/zona8-298x168.png',
        'img/carrusel/zona9-298x168.png',
        'img/carrusel/zona10-298x168.png',
        'img/carrusel/zona11-298x168.png',
        'img/carrusel/zona12-298x168.png',
        'img/carrusel/zona13-298x168.png',
        'img/carrusel/zona14-298x168.png',
        'img/carrusel/zona15-298x168.png',
        'img/carrusel/zona16-298x168.png',
        'img/carrusel/zona17-298x168.png',
        'img/carrusel/zona18-298x168.png'

    ];

    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#carusel');

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto(e) {
        e.preventDefault();
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto(e) {
        e.preventDefault();
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
} 