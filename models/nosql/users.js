// Relacionado a mongo en este caso


// Tabla de usuarios

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    // en el primer corchete va la propiedad que queremos guardar
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
        email: {
            type: String,
            unique: true,
        },
        password: {
            type: String,
        },
        role: {
            type: ["user","admin"],
            default: "user",
        }
    },

    // en el segundo corchete mostramos que queremos que nos guarde solo la fecha de alta y modif.

    {
        timestamps: true,
        versionKey: false,


    }
);


// aqui eportamos el modelo de la tabla users
module.exports = mongoose.model('User', UserSchema);
