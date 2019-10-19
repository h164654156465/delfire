const Resource = require('../models/userResource.model')
const rescueService = require('../service/rescueResource')

exports.get_create = function (req, res, next) {
    res.render('register')
}


exports.create = async function (req, res, next) {
    // let resource = new Resource({
    //     name: req.body.name,
    //     email: req.body.email,
    //     plane: req.body.plane,
    //     plane_address: req.body.plane_address,
    //     flm_rtd: req.body.flm_rtd
    // })

    // await resource.save().then(function (result) {
    //     console.log(result)
    // })

    // res.redirect('/resource/create')
    rescueService.create(req, res)
}


exports.show_userResource = function (req, res, next) {
    Resource.find({}, function (err, resources) {
        res.render('resource', { resources: resources })
    })
}

