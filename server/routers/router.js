const express = require('express')
const router = express.Router()

const middle = require('../middleware/middle')
const controller = require('../controllers/main')

router.post('/upload', controller.upload)



module.exports = router