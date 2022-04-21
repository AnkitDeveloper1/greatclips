const Joi = require('joi');
const mongoose = require('mongoose');

const saloonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    city: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    state: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    zipcode: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    open_hours: {
        type: Array,
        required: true
    },
    status: {
        type: String,
        enum: ['enabled', 'disabled'],
        default: 'enabled'
    },
    created_on: {
        type : Date,
        default: Date.now
    }
})

const Saloon = mongoose.model("saloons", saloonSchema);


function validateSaloon(saloon) {
    const schema= Joi.object({
        name: Joi.string().min(2).max(50).required(),
        address: Joi.string().min(2).max(50).required(),
        city: Joi.string().min(2).max(50).required(),
        state: Joi.string().min(2).max(50).required(),
        zipcode: Joi.string().min(2).max(50).required(),
        open_hours: Joi.array().required(),
        status: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(saloon, {abortEarly: false});
}

exports.Saloon = Saloon;
exports.validate = validateSaloon;
