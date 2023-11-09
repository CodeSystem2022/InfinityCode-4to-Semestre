
const nav = document.querySelector('nav');
window.addEventListener('scroll',fixNav);
const logoNegro = document.querySelector("#logoNegro");
const logoBlanco = document.querySelector("#logoBlanco");

function fixNav(){
    if(window.scrollY > nav.offsetHeight+150){
        nav.classList.add('active')

        logoBlanco.classList.add('disabled')
        logoNegro.classList.remove('disabled')
    }else{
        nav.classList.remove('active')
        logoBlanco.classList.remove("disabled")
        logoNegro.classList.add("disabled")
    }
}
document.querySelector('a[href="#main"]').addEventListener('click', function(e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    document.querySelector('#main').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        duration: 1000 // Duración en milisegundos (1 segundo en este ejemplo)
    });
});


const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const contador = document.querySelector("#contador");

function cargarProductos(){
    productosArray.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div class="box">
                <img src="${producto.img}" alt="${producto.productName}"/>
            <div class="product-txt">
                <h3>${producto.productName}</h3>
                <p>${producto.detail}</p>
                <p class="precio">$${producto.price}</p>
                <button class="producto-agregar btn-3" id="${producto.id}">Agregar al carro</button>
            </div>   
        `;
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar();
}
cargarProductos();

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarrito);
    })
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarContador();
}else{
    productosEnCarrito = [];
};


function actualizarContador(){
    let nuevoContador = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contador.innerHTML = nuevoContador;
};

let usuarioAutenticado = false;

function agregarAlCarrito(e) {
    if (usuarioAutenticado) {
        const idBoton = e.currentTarget.id;
        const productoAgregado = productosArray.find(producto => producto.id === idBoton);

        if (productosEnCarrito.some(producto => producto.id === idBoton)) {
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
            productosEnCarrito[index].cantidad++;
        } else {
            productoAgregado.cantidad = 1;
            productosEnCarrito.push(productoAgregado);
        }
        actualizarContador();
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    } else {
        window.location.href = "/users/login";
    }
}
