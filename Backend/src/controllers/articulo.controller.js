articuloCtrl ={};
const articuloModel = require('../models/articulo');

articuloCtrl.getArticulos = async (req, res)=>{
    const arrayArticulos = await articuloModel.find();

    res.json(arrayArticulos)
}

articuloCtrl.postArticulo = async (req, res) =>{
    const {nombre, precio, impuesto, tarifa, descripcion} = req.body

    const guardarArticulo = new ArticuloModel ({
        nombre: nombre,
        precio: precio,
        impuesto: impuesto,
        tarifa: tarifa,
        descripcion: descripcion
    })

    guardarArticulo.save()
}

module.exports = articuloCtrl