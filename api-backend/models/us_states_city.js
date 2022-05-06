const mongoose = require('mongoose');

const usStatesSchema =  new mongoose.Schema({
    _id: {
        type: Object
    },
    name: {
        type: String
    },
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
    },
    country_code: {
        type: String
    },
    state_name: {
        type: String
    },
});

const UsStatesCity = mongoose.model('us_states_city', usStatesSchema);

exports.UsStatesCity = UsStatesCity;
