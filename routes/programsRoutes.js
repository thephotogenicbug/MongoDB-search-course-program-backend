const express = require('express')
const { createPrograms, getPrograms } = require('../controllers/programsController')
const router = express.Router()

router.route('/create').post(createPrograms)
router.route('/get').get(getPrograms)

module.exports = router;