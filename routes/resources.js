var express = require('express')
var router = express.Router();

let user = require('../controllers/userResource')
/* GET home page. */


router.get('/upload', user.show_userResource)
router.post('/upload', user.upload)

module.exports = router;