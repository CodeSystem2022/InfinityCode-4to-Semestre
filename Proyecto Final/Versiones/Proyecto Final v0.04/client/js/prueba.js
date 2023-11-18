const shopContent = document.getElementById("shopContent");
const cart = [];

productos.forEach((product) => {
    const content = document.createElement("div");
    content.className = "box";
    content.innerHTML = `
    
    <img src="${product.img}" alt="">
        <div class="product-txt">
        <h3>${product.productName}</h3>
        <p>${product.description}</p>
        <p class="precio">$${product.price}</p>
        <a href="#" class="agregar-carrito btn-3" data-id="${product.id}">Agregar al carro</a>
    </div>
    `;

    shopContent.appendChild(content);

    const buyButton = document.createElement("button");
    buyButton.innerText = "Comprar";
    
    content.appendChild(buyButton);

    buyButton.addEventListener("click", () => {
        const productInCart = cart.find((cartProduct) => cartProduct.id === product.id);
        if (productInCart) {
            productInCart.quanty++;
        } else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: 1, // Definir la cantidad inicial
                img: product.img,
            });
        }
        displayCartCounter();
    });
});

function displayCartCounter() {
    // Lógica para mostrar la cantidad de productos en el carrito
    // Por ejemplo, puedes actualizar el contenido de un elemento HTML que muestra el contador.
    // Ejemplo:
    const cartCounter = document.getElementById("cartCounter");
    const totalItemsInCart = cart.reduce((total, product) => total + product.quanty, 0);
    cartCounter.textContent = totalItemsInCart;
}
