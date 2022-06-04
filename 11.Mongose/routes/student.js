const express = require('express')
const {allStudents,studentDetail} = require('../controllers/studentController.js')

const router = express.Router()


router.get('/all',allStudents)

router.get('/detail',studentDetail)

module.exports = router