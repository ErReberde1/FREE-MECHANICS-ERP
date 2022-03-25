const {Router} = require('express');
const router = Router();

const {getProveedores, postProveedor, putProveedor, deleteProveedor, getProveedor} = require('../controllers/proveedor.controller.js')

router.route('/')
    .get(getProveedores)
    .post(postProveedor);

router.route('/:id')
    .get(getProveedor)
    .delete(deleteProveedor)
    .put(putProveedor)


module.exports = router;