//La palabra async no es necesaria en la funcion 

async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
        console.log('Hola ' + nombre);
        resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('bla bla bla');
            resolve(nombre);
        }, 1000);
    });
}
