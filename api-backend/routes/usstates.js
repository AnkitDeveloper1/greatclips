const { UsStatesCity } = require('../models/us_states_city');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

// Get Us States
router.get('/', async (req, res) => {
    
    let response = await UsStatesCity.find();
    res.json({
        "success": true,
        "data": response
    });
});

module.exports = router;
