const {Schema, model} = require('mongoose');

const clienteSchema = new Schema ({
    nombre: String,
    apellido: String,
    email: String,
    direccion: String,
    cif: String,
    ciudad: String,
    provincia: String,
    telefono: Number,
    pais: String,
    cp: Number,
    plantilla: String,
    impuesto: String
    
}, {
    timestamps: true
})


module.exports = model('cliente', clienteSchema)