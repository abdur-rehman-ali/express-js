const express  = require("express");

const {home,about} = require('../controllers/homeController.js')
const router = express.Router()

router.get('/',home)
router.get('/about',about)

module.exports = router