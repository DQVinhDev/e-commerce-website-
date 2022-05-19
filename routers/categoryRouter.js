const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const auth = require('../middleware/auth')
const AuthAdmin = require('../middleware/authAdmin')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(auth, AuthAdmin, categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(auth, AuthAdmin, categoryCtrl.deleteCategory)
    .put(auth, AuthAdmin, categoryCtrl.updateCategory)
   

module.exports = router 