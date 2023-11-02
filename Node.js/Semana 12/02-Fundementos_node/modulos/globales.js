// this === global = true

// mostrar algo en consola
console.log();

// mostrar un mensaje en forma de error
console.error();

//Ejecutar un codigo despues de un intervalo de tiempo 
setTimeout(() => {});

//Ejecutar un codigo cada intervalo de tiempo 
setInterval(() => {});

//Da prioridad de ejecucion a una funcion asincronica
setImmediate(()=>{});

console.log(setInterval);

Let i = 0;
Let intervalo = setInterval(() =>{
    console.log("Hola");
    if (i===3) {
        clearInterval(intervalo); //detenemos
    }
    i++;

},1000);

setImmediate(() => {
    console.log("Saludo inmediato");
});

require();

console.log(process);

console.log(__dirname);
console.log(__filename);

globalThis.miVariable = "Mi variable global";
console.log(global.miVariable);
