const express = require('express')
const router = express.Router()
const {getAll} = require('../../controllers/reviews')

router.get('/', getAll)

module.exports = router;