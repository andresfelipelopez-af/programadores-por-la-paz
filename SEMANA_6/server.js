const express = require('express');
const app = express();

// Middleware obligatorio para parsear los cuerpos de las peticiones en formato JSON
app.use(express.json());

// Endpoint 1: Registro básico (POST)
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Endpoint 2: Simulación de Registro de Incidencias Comunitarias (POST)
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

// Inicialización del puerto de escucha
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});