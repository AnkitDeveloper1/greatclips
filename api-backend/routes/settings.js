const {Settings, validate} = require('../models/settings');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');

// Save/Update Settings
router.post('/', authentication, async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let settings = await Settings.findOne({email: req.body.email});
    if(settings) {
        let query = { _id: Object(settings._id) };
        settings['estimate_time'] = req.body.estimate_time;
        delete settings['_id'];
        await settings.updateOne(query, settings);

        res.json({
            "success": true,
            "message": "Settings Saved Successfully!"
        });
    } else {
        settings = new Settings({
            estimate_time: req.body.estimate_time
        });
        await settings.save();

        res.json({
            "success": true,
            "message": "Settings Updated Successfully!"
        });
    }
});


module.exports = router;
