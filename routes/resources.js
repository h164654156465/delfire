var express = require('express')
var router = express.Router();

let user = require('../controllers/userResource')
/* GET home page. */

router.get('/', user.get_create)
router.get('/create', user.show_userResource)
router.post('/create', user.create)



module.exports = router;