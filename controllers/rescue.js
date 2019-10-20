const rescueService = require('../service/rescueResource')

exports.get_rescueTrack = function(req, res, next) {
    rescueService.getPlane(req, res);
}