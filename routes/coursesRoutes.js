const express = require('express')
const { createCourses, getCourses } = require('../controllers/coursesController')
const router = express.Router()

router.route('/create').post(createCourses)
router.route('/get').get(getCourses)

module.exports = router;