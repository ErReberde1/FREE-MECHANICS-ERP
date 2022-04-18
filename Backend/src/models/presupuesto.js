const {Schema, model} = require('mongoose')

const presupuestoSchema = new Schema({
    nombre: String,
    cif: String,
    articulo: String,
    precio: Number,
    cantidad: Number,
    total: Number
},{
    timestamps: true
})

module.exports = model("presupuesto", presupuestoSchema)