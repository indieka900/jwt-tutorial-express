const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

router.route('/dashboard').get(dashboard)
router.route('/login').get(login).post(login)

module.exports = router