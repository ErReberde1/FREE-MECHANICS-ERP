const {Schema, model} = require("mongoose")

const articuloSchema = new Schema({
    nombre: String,
    precio: Number,
    impuesto: Number,
    tarifa: Number,
    descripcion: String
},{
    timestamps: true
}
)

module.exports = model("articulo", articuloSchema)