const {Router} = require('express');
const router = Router();

const {getArticulos, postArticulo} = require ('../controllers/articulo.controller.js')

router.route("/")
    .get(getArticulos)
    .post(postArticulo)

/* router.route("/:id") */
   /*  .get()
    .put()
    .delete() */

module.exports = router