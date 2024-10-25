import express from 'express';

const app = express(); // Creamos una instancia de Express
const PORT = 3000; // Configura el puerto que escuchara el servidor 

//Ruta GET con parámetro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
const edad = req.query.edad;
console.log(`Edad recibida: ${edad}`);
res.send(`Edad del perfil: ${edad}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});