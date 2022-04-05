const {Schema, model} = require("mongoose")

const articuloSchema = new Schema({
    codigo: Number,
    nombre: String,
    precio: Number,
    impuesto: Number,
    tarifa: Number,
    descripcion: String,
    fecha: Date
},{
    timestamps: true
}
)

module.exports = model("articulo", articuloSchema)