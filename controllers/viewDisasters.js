const rescueResource = require('../service/rescueResource')
exports.FirePoints = function(req, res, next) {


    let initPoint = {
        center: { lat: -29.340552, lng: 152.712959 },
        zoom: 8
    }

    

    // res.render('disaster', { FireStations: JSON.stringify(FireStations), InitViewPoint: JSON.stringify(initPoint) })
    res.render('disaster', { InitViewPoint: JSON.stringify(initPoint) })
        // Resource.find({}, function (err, resources) {
        //     console.log(resources)
        //     res.render('resource', { resources: resources })
        // })

}