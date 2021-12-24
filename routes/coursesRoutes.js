const express = require('express')
const { createCourses, getCourses, getCourseById } = require('../controllers/coursesController')
const router = express.Router()

router.route('/create').post(createCourses)
router.route('/get').get(getCourses)
router.route('/get/:id').get(getCourseById)

module.exports = router;