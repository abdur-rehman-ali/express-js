const express  = require("express");

const home = require('../controllers/homeController.js')
const router = express.Router()

router.get('/index',home)

module.exports = router