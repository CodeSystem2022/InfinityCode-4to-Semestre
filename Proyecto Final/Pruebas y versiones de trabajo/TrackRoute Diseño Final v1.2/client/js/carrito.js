let botonesAgregar = document.querySelectorAll(".producto-agregar");
const contador = document.querySelector("#contador");

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarrito);
    })
}

const productosEnCarrito = [];

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarContador();   
};

function actualizarContador(){
    let nuevoContador = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contador.innerHTML = nuevoContador;
};