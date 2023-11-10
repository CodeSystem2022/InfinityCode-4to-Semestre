
let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorTotal = document.querySelector("#total");
let botonesEliminar = document.querySelector(".carrito-producto-eliminar");
const checkoutButton = document.querySelector("#checkout-btn");

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


const mercadopago = new MercadoPago("APP_USR-e45ee6d6-45a3-4d80-b8ec-0e99bd26435d", {
  locale: "es-AR", // Los mas comunes son: 'pt-BR', 'es-AR' y 'en-US'
});


checkoutButton.addEventListener("click", function () {

  checkoutButton.remove();

  const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);

  const orderData = {
    quantity: 1,
    description: 'Compra de cubiertas',
    price: totalCalculado,
  };

  fetch("http://localhost:8080/create_preference", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (preference) {
      createCheckoutButton(preference.id);
    })
    .catch(function () {
      alert("Unexpected error");
    });
});

function createCheckoutButton(preferenceId) {
  // Initialize the checkout
  const bricksBuilder = mercadopago.bricks();

  const renderComponent = async (bricksBuilder) => {
    if (window.checkoutButton) window.checkoutButton.unmount();
    await bricksBuilder.create(
      "wallet",
      "button-checkout", // class/id where the payment button will be displayed
      {
        initialization: {
          preferenceId: preferenceId,
        },
        callbacks: {
          onError: (error) => console.error(error),
          onReady: () => {},
        },
      }
    );
  };
  window.checkoutButton = renderComponent(bricksBuilder);
}