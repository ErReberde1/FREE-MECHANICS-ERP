const clienteCtrl =   {};

const clienteModel = require('../models/cliente.js')

clienteCtrl.getClientes = async (req,res)=>{
    const arrayClientes = await clienteModel.find()
    
    res.json(arrayClientes)
}
clienteCtrl.postCliente = async (req,res)=>{
    const {nombre, apellido,direccion, email, cif, ciudad, pais, cp} = req.body;
    const guardarCliente = new clienteModel({
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: direccion,
        cif: cif,
        ciudad: ciudad,
        pais: pais,
        cp: cp,
    })
    res.json({message: 'cliente guardado'})
    await guardarCliente.save()

}


clienteCtrl.putCliente = (req,res)=>res.json({message: 'Put request'})
clienteCtrl.deleteCliente = (req,res)=>res.json({message: 'Delete request de un ID'})
clienteCtrl.getCliente = (req,res)=> res.send({message: 'Get request'})


module.exports = clienteCtrl;