const express = require('express')
const router = express.Router()
const {allStudents,detailStudents} = require('../controllers/studentController.js')

router.get('/all',allStudents)

router.get('/detail/:id',detailStudents)

module.exports = router