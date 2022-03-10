const {Router} = require('express');
const router = Router();
const {getClientes, postCliente, putCliente, deleteCliente, getCliente} = require('../controllers/cliente.controller.js')

router.route('/')
    .get(getClientes)
    .post(postCliente)

router.route('/:id')
    .get(getCliente)
    .delete(deleteCliente)
    .put(putCliente)
    
module.exports = router;