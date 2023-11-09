const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataRoutes = require('./src/Routes/dataroutes');

const corsOptions = {
    origin: '*', // Reemplaza con tu dominio permitido
    methods: 'GET, POST',
    allowedHeaders: 'Content-Type, Authorization',
  };
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// Rutas de tu API aquí
app.use('/API/', dataRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});