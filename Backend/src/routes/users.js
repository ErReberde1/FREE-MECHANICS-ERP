const {Router} = require('express');
const router = Router();
const {getUsers, getUser, postUser, putUser, deleteUser} = require('../controllers/user.controller.js')

router.route('/')
    .get(getUsers)
    .post(postUser)


router.route('/:id')
    .get(getUser)
    .put(putUser)
    .delete(deleteUser)

module.exports = router