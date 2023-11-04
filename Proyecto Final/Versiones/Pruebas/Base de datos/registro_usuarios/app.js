const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',         // Reemplaza 'tu_host' con el servidor de tu base de datos                         
  user: 'root',              // Reemplaza 'tu_usuario' con tu nombre de usuario de MySQL                        
  password: 'admin',         // Reemplaza 'tu_contraseña' con tu contraseña de MySQL                            
  database: 'database.js',   // Reemplaza 'nombre_de_la_base_de_datos' con el nombre de tu base de datos        
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }

  console.log('Conexión exitosa a la base de datos');

  // Resto del código...

});

// Rutas para manejar las solicitudes del formulario de registro de usuario
app.post('/registrar-usuario', (req, res) => {
  const { nombre, apellido, usuario, contraseña } = req.body;

  // Realiza la inserción en la base de datos
  const insertQuery = `INSERT INTO usuarios (nombre, apellido, usuario, contraseña) VALUES (?, ?, ?, ?)`;
  connection.query(insertQuery, [nombre, apellido, usuario, contraseña], (err, result) => {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      res.send('Error al registrar el usuario.');
    } else {
      console.log('Usuario registrado con éxito');
      res.send('Usuario registrado con éxito.');
    }
  });
});

// Resto de las rutas y configuración del servidor...

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
