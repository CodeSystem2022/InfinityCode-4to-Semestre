
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorTotal = document.querySelector("#total");
let botonesEliminar = document.querySelector(".carrito-producto-eliminar");

function cargarProductosCarrito(){
  
  if (productosEnCarrito && productosEnCarrito.length>0) {

      contenedorCarritoVacio.classList.add("disabled");
      contenedorCarritoProductos.classList.remove("disabled");
      contenedorCarritoAcciones.classList.remove("disabled");
      
      contenedorCarritoProductos.innerHTML = "";

      productosEnCarrito.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("cart");
        div.innerHTML = `
          <section class="carrito-producto">
            <div class="item">
              <h2>${producto.productName}</h2>
            </div>
            <div class="item">
              <img src="${producto.img}" alt="${producto.productName}" />
              <div class="carrito-producto-detalles">
                <span>Detalle</span>
                <h3>${producto.detail}</h3>
              </div>
              <div class="carrito-producto-cantidad">
                <span>Cantidad</span>
                <h3>${producto.cantidad}</h3>
              </div>
              <div class="carrito-producto-precio">
                <span>Precio Unitario</span>
                <h3>$ ${producto.price}</h3>
              </div>
              <div class="carrito-producto-subtotal">
                <span>SubTotal</span>
                <h3>$ ${producto.price * producto.cantidad}</h3>
              </div>
              
              <button class="carrito-producto-eliminar" id="${producto.id}"><i class="fa-solid fa-trash"></i> Eliminar</button>
            </div>
            <div class="item">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
          </section>
        `;

        contenedorCarritoProductos.append(div);

      })
      
    }else{
      contenedorCarritoVacio.classList.remove("disabled");
      contenedorCarritoProductos.classList.add("disabled");
      contenedorCarritoAcciones.classList.add("disabled");
    };

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar(){
  botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

  botonesEliminar.forEach(boton =>{
      boton.addEventListener("click", eliminarDelCarrito);
  });
}

function eliminarDelCarrito(e){
  const idBoton = e.currentTarget.id;
  const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
  
  productosEnCarrito.splice(index, 1);
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  cargarProductosCarrito();
}

function actualizarTotal(){
  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);
  total.innerHTML = `$${totalCalculado}`;
  prod.innerHTML = `$${totalCalculado}`;
}