const Resource = require('../models/userResource.model')
const ReadPreference = require('mongodb').ReadPreference
const fetch = require('node-fetch')

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

function getPlane(req, res, next) {
    const docquery = Resource.find({}).read(ReadPreference.NEAREST)
    docquery
        .exec()
        .then(async resources => {
            let planes = [];
            await resources.map(resource => {
                // console.log(resource)
                let planeAddress = resource.plane_address.split(",")
                    // console.log(planeAddress)
                let position = { lat: parseFloat(planeAddress[0]), lng: parseFloat(planeAddress[1]) }

                planes.push(position)


            })

            // await fetch('https://2019nasahackathonfunc.azurewebsites.net/api/getFirestation?code=qbYQFaO2IG0R1i5qEKfhbXWBT12h481eS1a1Tllwg5wohOi8KLYdaA==').then(result => {
            //     console.log(result);
            //     res.render('rescue', { resources_planes: JSON.stringify(planes) })
            // });

            res.render('rescue', { resources_planes: JSON.stringify(planes) })


            // res.render('resource', { resources: resources })
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
    create,
    getPlane
}