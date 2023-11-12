
# El cliente

Empresa: Track Route<br>
Rubro: Venta de neumáticos<br>
Documentación: Brief del proyecto

# El sitio

![Screen Shot 2023-11-10 at 02 24 07](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/288acc4b-743f-48a9-9c75-ed33f2ace0aa)

TODO LO QUE ENCONTRARÁS EN NUESTRO SITIO:<br>

- Creación y registro de nuevos usuarios de la tienda online.


![Screen Shot 2023-11-10 at 02 21 01](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/e4f36b37-cdab-4f50-87a0-fdf6e684e4b1)

- Inicio de sesión de usuarios registrado correctamente.


![Screen Shot 2023-11-10 at 02 20 31](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/f07437e1-2c5f-4a2a-92a5-deb6e2c61636)

- Navegación del catálogo de productos de la empresa.

![Screen Shot 2023-11-10 at 02 29 23](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/28f80570-66c1-4aea-b9d0-797b85a1ed7b)

- Accesso exclusivo del carro de compras para usuarios registrados.


![Screen Shot 2023-11-10 at 02 27 57](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/a028152d-d4e6-45ea-8517-212fb37410c8)

- Agregar o eliminar productos al carro de compras.

  
![Screen Shot 2023-11-10 at 02 31 00](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/b49bc249-da74-43e8-baa9-2dd47e061a4a)

- Pasarela de pagos con plataforma de mercado pago para la confirmación de la compra.

![Screen Shot 2023-11-10 at 02 31 16](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/3b7d6fd2-a00a-4e7f-ae77-e4b34ac5f0ef)

![Screen Shot 2023-11-10 at 02 31 35](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/fe133b2d-3de9-4b6f-b760-aa26d8c1130f)

- Datos de contacto y ubicación de la empresa.
- Solicitar asesoramiento de un vendedor a través de WhatsApp.


![Screen Shot 2023-11-11 at 22 55 38](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/fc7762d2-957b-4348-aaa5-d5358051595f)

- Redes sociales.

![Screen Shot 2023-11-10 at 02 30 41](https://github.com/CodeSystem2022/InfinityCode-4to-Semestre/assets/103860123/e62c8928-e704-429a-bdb7-1ab24c817990)

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
# Integrantes

Tecnicatura Universitaria en Programación - UTN San Rafael 

| Nombre y Apellido     | GitHub                                     |
|:---------------------| :-------------------------------------------|
| `Sebastián García`    | :octocat:  https://github.com/seba0021     |
| `Gabriela Manca`      | :octocat:  https://github.com/gabbylinna   |
| `Federico Sosa`       | :octocat:  https://github.com/FedeSosa0021 |

# Agradecimientos

