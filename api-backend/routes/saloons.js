const {Saloon, validate} = require('../models/saloon');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');

// Get Saloons
router.get('/', async (req, res) => {
    
    let saloon = await Saloon.find();
    
    res.json({
        "success": true,
        "data": saloon
    });
});


// Get Saloon
router.get('/:id', async (req, res) => {
    
    let saloon = await Saloon.findOne({_id: req.params.id});
    
    res.json({
        "success": true,
        "data": saloon
    });
});


// Add Saloon
router.post('/', authentication, async (req, res) => {
    console.log(req.body)
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let saloon = await Saloon.findOne({name: req.body.name});
    if(saloon) {
        return res.json({
            "success": false,
            "message": "Saloon already exists",
        });
    }

    saloon = new Saloon({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        open_hours: req.body.open_hours,
        status: req.body.status
    });

    await saloon.save();
    
    res.json({
        "success": true,
        "message": "Saloon added successfully"
    });
});


// Update Saloon
router.put('/:id', authentication, async (req, res) => {
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let saloon = await Saloon.findOne({_id: Object(req.params.id) });
    
    if(!saloon) {
        return res.json({
            "success": false,
            "message": "Saloon not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    saloon['name'] = req.body.name;
    saloon['address'] = req.body.address;
    saloon['city'] = req.body.city;
    saloon['state'] = req.body.state;
    saloon['zipcode'] = req.body.zipcode;
    saloon['open_hours'] = req.body.open_hours;
    saloon['status'] = req.body.status;
    delete saloon['_id'];
    await Saloon.updateOne(query, saloon);

    res.json({
        "success": true,
        "message": "Saloon updated successfully"
    });
});


// Delete Saloon
router.delete('/:id', authentication, async (req, res) => {
    
    let saloon = await Saloon.findOne({_id: Object(req.params.id) });
    
    if(!saloon) {
        return res.json({
            "success": false,
            "message": "Saloon not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    await Saloon.deleteOne(query);

    res.json({
        "success": true,
        "message": "Saloon deleted successfully"
    });
});


module.exports = router;
