const proveedorCtrl = {};

const proveedorModel = require('../models/proveedor.js');

proveedorCtrl.getProveedores = async(req,res)=>{
    const arrayProveedores = await proveedorModel.find()
    
    res.json(arrayProveedores)
    
    
}
proveedorCtrl.postProveedor = async(req, res)=>{
    const {nombre, apellido,direccion, email, cif, ciudad, pais, cp, provincia, telefono, impuesto, plantilla} = req.body;
    const guardarProveedor = new proveedorModel({
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: direccion,
        cif: cif,
        ciudad: ciudad,
        provincia: provincia,
        telefono: telefono,
        pais: pais,
        cp: cp,
        plantilla: plantilla,
        impuesto: impuesto
    })
    res.json({message: 'Proveedor guardado'})
    await guardarProveedor.save()
}



proveedorCtrl.getProveedor = async (req,res)=>{
    const proveedor = await proveedorModel.findById(req.params.id);

    res.json(proveedor)
}
proveedorCtrl.putProveedor = (req,res)=>res.json({message: 'Put request'})
proveedorCtrl.deleteProveedor = (req,res)=>res.json({message: 'Put request'})




module.exports = proveedorCtrl;