const userCtrl =   {};

userCtrl.getUsers = (req,res)=>res.json({message:'GET REQUEST'})
userCtrl.postUser = (req,res)=>res.json({message: 'POST request'})


userCtrl.putUser = (req,res)=>res.json({message: 'Put request'})
userCtrl.deleteUser = (req,res)=>res.json({message: 'Delete request de un ID'})
userCtrl.getUser = (req,res)=> res.send({message: 'Get request'})


module.exports = userCtrl;