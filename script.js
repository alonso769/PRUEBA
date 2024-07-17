// Cargar más
let loadMoreBtn = document.querySelector('#load-more');
let currentItems = 8;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box')];
    for (var i = currentItems; i < currentItems + 4; i++) {
        if (boxes[i]) {
            boxes[i].style.display = 'inline-block';
        }
    }
    currentItems += 4;
    if (currentItems >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }
}

// Carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    // Dispara cuando se presiona "Agregar Carrito"
    elementos1.addEventListener('click', comprarElemento);

    // Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarElemento);

    // Al Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 height=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}


document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel-2');

    carousels.forEach((carousel, index) => {
        let position = 0;
        const slidesToShow = 1; // Número de imágenes a mostrar a la vez
        const slidesToScroll = 1; // Número de imágenes a desplazar cada vez
        const totalSlides = carousel.children.length;

        const moveToNextSlide = () => {
            position -= slidesToScroll;
            if (position < -totalSlides + slidesToShow) {
                position = 0; // Reinicia al principio
            }

            carousel.style.transform = `translateX(${position * 100}%)`;
        };

        // Desplazar automáticamente cada 3 segundos
        setInterval(moveToNextSlide, 5000);
    });
});

