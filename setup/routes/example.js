var express = require('express');
var Example = require('../controllers/example')

var router = express.Router()

router.get('/example', Example.get)
router.put('/example', Example.put)
router.post('/example', Example.post)
router.delete('example', Example.del)
router.get('/examples', Example.getAll)

module.exports = router;