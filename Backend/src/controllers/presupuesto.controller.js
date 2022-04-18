const presupuestoCtrl ={};

const presupuestoModel = require('../models/presupuesto')

presupuestoCtrl.getPresupuesto = async(req, res)=>{

    const arrayPresupuestos = await presupuestoModel.find();

    res.json(arrayPresupuestos)

}

presupuestoCtrl.postPresupuesto = async(req, res)=>{
    const {nombre, cif, articulo, precio, cantidad, total} = req.body;

    const guardarPresupuesto = new presupuestoModel({
        nombre: nombre, 
        cif: cif, 
        articulo: articulo, 
        precio: precio, 
        cantidad:cantidad, 
        total: total
    })

    guardarPresupuesto.save()
}

module.exports = presupuestoCtrl;