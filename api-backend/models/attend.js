const Joi = require('joi');
const mongoose = require('mongoose');

const attendSchema = mongoose.Schema({
    user_id: {
        type: Object,
        required: true
    },
    saloon_id: {
        type: Object,
        required: true
    },
    check_in: {
        type: Date,
        required: true,
        default: Date.now
    },
    check_out: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        enum: ['', 'pending', 'approved', 'rejected', 'completed', 'not_arrive'],
        default: ''
    },
    accepted_on: {
        type : Date
    },
    rejected_on: {
        type : Date
    },
    created_on: {
        type : Date,
        default: Date.now
    }
})

const Attend = mongoose.model("usersattend", attendSchema);


function validateAttend(attend) {
    const schema= Joi.object({
        user_id: Joi.required(),
        saloon_id: Joi.required()
    });
    return schema.validate(attend, {abortEarly: false});
}

exports.Attend = Attend;
exports.validate = validateAttend;
