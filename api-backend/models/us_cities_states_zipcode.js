const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema =  new mongoose.Schema({
    city: {
        type: String
    },
    state_code: {
        type: String
    },
    zip: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    county: {
        type: String
    }
});

const UsCitiesStatesZipcode = mongoose.model('us_cities_states_zipcode', userSchema);

exports.UsCitiesStatesZipcode = UsCitiesStatesZipcode;