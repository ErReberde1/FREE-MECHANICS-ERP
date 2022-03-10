const {Schema, model} = require('mongoose');

const clienteSchema = new Schema ({
    nombre: String,
    apellido: String,
    email: String,
    direccion: String,
    cif: String,
    ciudad: String,
    pais: String,
    cp: Number,
}, {
    timestamps: true
})


module.exports = model('cliente', clienteSchema)