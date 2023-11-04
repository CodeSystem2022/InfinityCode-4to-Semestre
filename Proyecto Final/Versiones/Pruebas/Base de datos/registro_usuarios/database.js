const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'database.js',
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }

  console.log('Conexión exitosa a la base de datos');

  // Crear la tabla
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      apellido VARCHAR(255) NOT NULL,
      usuario VARCHAR(255) NOT NULL,
      contraseña VARCHAR(255) NOT NULL
    )
  `;

  connection.query(createTableQuery, (err) => {
    if (err) {
      console.error('Error al crear la tabla:', err);
      return;
    }

    console.log('Tabla "usuarios" creada con éxito');

    // Cerrar la conexión a la base de datos
    connection.end((err) => {
      if (err) {
        console.error('Error al cerrar la conexión a la base de datos:', err);
      } else {
        console.log('Conexión a la base de datos cerrada');
      }
    });
  });
});
