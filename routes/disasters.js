var express = require('express')
var router = express.Router();

let view = require('../controllers/viewDisasters')
/* GET home page. */
router.get('/', view.FirePoints);

module.exports = router;