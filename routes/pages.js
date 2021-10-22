const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/forgot', (req, res) => {
    res.render('forgot')
})

module.exports = router