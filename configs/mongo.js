// Creamos la conexión con MongoDB

const mongoose = require('mongoose');

// Declaramos la conexión con MongoDB

    const dbConnect = () => {
        const DB_URI = process.env.DB_URI
        mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, res) => {
            if (!err) {
                console.log('**** CONEXION CORRECTA ****')
            } else {
                console.log('***** ERROR DE CONEXION ****')
            }
        })
    }

// Exportamos la función del módulo mongo.js
module.exports = dbConnect