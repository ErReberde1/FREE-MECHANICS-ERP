const {Schema, model} = require('mongoose')

const facturaSchema = new Schema({
    serie: Number,
    nombrecliente: String,
    cifCliente: String,
    direccionCliente: String
})

module.exports = model('factura', facturaSchema)