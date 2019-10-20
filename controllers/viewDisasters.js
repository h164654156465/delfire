const rescueResource = require('../service/rescueResource')
exports.FirePoints = function(req, res, next) {


    let initPoint = {
        center: { lat: -29.340552, lng: 152.712959 },
        zoom: 8
    }

    // let FireStation;
    // fetch('https://2019nasahackathonfunc.azurewebsites.net/api/getFirestation?code=qbYQFaO2IG0R1i5qEKfhbXWBT12h481eS1a1Tllwg5wohOi8KLYdaA==').then(result => {
    //     console.log(result);
    // });



    // res.render('disaster', { FireStations: JSON.stringify(FireStations), InitViewPoint: JSON.stringify(initPoint) })
    res.render('disaster', { InitViewPoint: JSON.stringify(initPoint) })
        // Resource.find({}, function (err, resources) {
        //     console.log(resources)
        //     res.render('resource', { resources: resources })
        // })

}