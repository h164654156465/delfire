const Resource = require('../models/userResource.model')



exports.get_create = function (req, res, next) {
    res.render('register')
}


exports.create = async function (req, res, next) {
    let resource = new Resource({
        name: req.body.name,
        email: req.body.email,
        plane: req.body.plane,
        plane_address: req.body.plane_address,
        plane_level: req.body.plane_level,
        flm_rtd: req.body.flm_rtd
    })

    console.log(resource)
    await resource.save().then(function (result) {
        console.log(result)
    })

    res.redirect('/resource/create')
}


exports.show_userResource = function (req, res, next) {
    Resource.find({}, function (err, resources) {
        console.log(resources)
        res.render('resource', { resources: resources })
    })
}
