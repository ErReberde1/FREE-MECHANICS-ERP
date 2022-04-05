const clienteCtrl =   {};

const clienteModel = require('../models/cliente.js')

clienteCtrl.getClientes = async (req,res)=>{
    const arrayClientes = await clienteModel.find()

    res.json(arrayClientes)
}

clienteCtrl.postCliente = async (req,res)=>{
    const {nombre, apellido,direccion, email, cif, ciudad, pais, cp, provincia, telefono, impuesto, plantilla} = req.body;
    const guardarCliente = new clienteModel({
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
    res.json({message: 'cliente guardado'})
    await guardarCliente.save()

}


clienteCtrl.putCliente = async (req,res)=>{
    
    const {nombre, apellido,direccion, email, cif, ciudad, pais, cp, provincia, telefono, impuesto, plantilla} = req.body;
    await clienteModel.findByIdAndUpdate(req.params.id, {
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
    });

    
    
}

clienteCtrl.deleteCliente = async(req,res)=>{

    await clienteModel.findByIdAndDelete(req.params.id)
    
}
clienteCtrl.getCliente = async(req,res)=>{
    
    const arrayCliente = await clienteModel.findById(req.params.id)
    
    res.json(arrayCliente)

    
}


module.exports = clienteCtrl;