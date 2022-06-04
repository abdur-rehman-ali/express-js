const express = require('express')
const {index,about} = require('../controllers/studentController.js')

const router = express.Router()


router.get('/index',index)

router.get('/about',about)

module.exports = router