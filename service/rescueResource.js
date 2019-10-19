const Resource = require('../models/userResource.model')
const ReadPreference = require('mongodb').ReadPreference

require('../mongo').connect();


function get(req, res, next) {
    const docquery = Resource.find({}).read(ReadPreference.NEAREST)
    docquery
        .exec()
        .then(resources => {
            res.render('resource', { resources: resources })
        }).catch(err => {
            res.status(500).send(err)
        })
}

function create(req, res, next) {
    const { name, email, plane, plane_address, flm_rtd } = req.body

    const resource = new Resource({ name, email, plane, plane_address, flm_rtd })

    resource.save().then(() => {
        res.redirect('/resource/create')
    }).catch(err => {
        res.status(500).send(err)
    })
}


module.exports = {
    get,
    create
}