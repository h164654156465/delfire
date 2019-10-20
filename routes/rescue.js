var express = require('express')
var router = express.Router();

let rescue = require('../controllers/rescue.js')
    /* GET home page. */
router.get('/', rescue.get_rescueTrack);

module.exports = router;