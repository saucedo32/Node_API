// Script creado para verificar con un simple "hola mundo" que el entorno funciona correctamente



// agregamos el dotenv para manejar las variables de entorno con los archivos .env
require('dotenv').config();


// Comenzamos declarando las librerías
// Express ayuda a levantar un servicio web
const express = require('express');
const cors = require('cors');


// Importamos la funcion para conectarnos a la base de datos mongo
const dbConnect = require('./configs/mongo');



const app = express();
// app va a hacer uso de cors para evitar errores con diferentes navegadores
app.use(cors());


// Creamos una constante con puerto 3000 que luego cambiaremos con variables de entorno
// En la segunda etapa creamos que se conecte por la variable de entorno o por el puerto 3000
const port = process.env.PORT || 3000;


// app va a escuchar por el puerto 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});



dbConnect();
