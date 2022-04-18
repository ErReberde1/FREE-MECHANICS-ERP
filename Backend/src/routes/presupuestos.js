const Router = require('express')
const router = Router()

const {postPresupuesto, getPresupuesto} = require('../controllers/presupuesto.controller.js')

router.route("/")
    .get(getPresupuesto)
    .post(postPresupuesto)



module.exports = router;