
const nav = document.querySelector('nav');
window.addEventListener('scroll',fixNav);

function fixNav(){
    if(window.scrollY > nav.offsetHeight+150){
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
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


const contenedorProductos = document.querySelector("#contenedor-productos")

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
                <a href="#" class="agregar-carrito btn-3" id="${producto.id}">Agregar al carro</a>
            </div>   
        `;
        contenedorProductos.append(div)
    })
}
cargarProductos();