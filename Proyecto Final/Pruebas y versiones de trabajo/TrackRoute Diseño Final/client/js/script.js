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