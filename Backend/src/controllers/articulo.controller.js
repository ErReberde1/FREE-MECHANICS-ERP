const articuloCtrl ={};
const articuloModel = require('../models/articulo');

articuloCtrl.getArticulos = async (req, res)=>{
    const arrayArticulos = await articuloModel.find();

    res.json(arrayArticulos)
}

articuloCtrl.postArticulo = async (req, res) =>{
    const {codigo, nombre, fecha, precio, impuesto, tarifa, descripcion} = req.body

    const guardarArticulo = new articuloModel ({
        fecha: fecha,
        codigo: codigo,
        nombre: nombre,
        precio: precio,
        impuesto: impuesto,
        tarifa: tarifa,
        descripcion: descripcion
    })

    guardarArticulo.save()
}

module.exports = articuloCtrl