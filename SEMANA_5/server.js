const express = require('express');
const app = express();

// Middleware necesario para que Express entienda datos en formato JSON en las peticiones POST
app.use(express.json());

// Ruta base (GET)
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta saludo (GET)
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetro dinámico en la URL (GET)
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta para recibir reportes en formato JSON (POST)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Levantar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});