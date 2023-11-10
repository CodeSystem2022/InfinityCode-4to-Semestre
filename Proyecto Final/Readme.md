![Screen Shot 2023-11-08 at 13 08 30](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/100f7ca1-0244-440f-89f4-fdee19bd6e9b)

# El cliente

Empresa: Track Route<br>
Rubro: Venta de neumáticos<br>
Documentación: Brief del proyecto

# El sitio

TODO LO QUE ENCONTRARÁS EN NUESTRO SITIO:<br>

- Creación y registro de nuevos usuarios de la tienda online.
- Inicio de sesión de usuarios registrado correctamente.
- Navegación del catálogo de prodcutos de la empresa.
- Accesso exclusivo del carro de compras para usuarios registrados. 
- Agregar o eliminar productos al carro de compras.
- Pasarela de pagos con plataforma de mercado pago para la confirmación de la compra.
- Datos de contacto y ubicación de la empresa.
- Redes sociales.
- Solicitar asesoramiento de un vendedor a través de WhatsApp.

# El proyecto 
Utilizamos las siguientes tecnologias y herramientas:<br>

1. Full-Stack: JavaScript, Node.js, HTML (ejs), CSS, Boostrap
2. Base de datos: PostgreSQL
3. Pasarela de Pago: Mercado Pago

## Instrucciones y dependencias
1. Crear una base de datos para el proyecto en PostgreSQL. La misma debe contener los siguientes datos:<br>
   a. Tabla: users<br>
   b. Columnas: id, name, email, password (unique)<br>

Los datos sobre la DB se encuentra en el documento .env, deberás modificarlos por los datos nuevos.<br>

```
DB_USER=XXXX
DB_PASSWORD=XXXX
DB_HOST=localhost
DB_PORT=XXXX
DB_DATABASE=XXXX
```
⚠️  corroborar el puerto de la base de datos

2. Iniciar el servidor

Luego de abrir la terminal o consola, instalar nodemon:
```
npm i -D nodemon
```
Para levantar el servidor:

```
npm run dev
```

LocalHost:8080

3. Estructura de la API<br>
![Screen Shot 2023-11-10 at 01 56 03](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/6b93ceac-86fe-49aa-bc53-691f73a51f4b)

- Tarjeta de productos<br>
```
const productosArray = [
    {
        id: "1",
        productName: "Pirelli Chrono",
        price: 1,
        detail: "175/64/14", 
        quanty: 1,
        img: "/img/utilitarios/01.png",
    },
```


