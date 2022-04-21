const Joi = require('joi');
const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    estimate_time: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    created_on: {
        type : Date,
        default: Date.now
    }
})

const Settings = mongoose.model("settings", settingsSchema);


function validateSetting(setting) {
    const schema= Joi.object({
        estimate_time: Joi.string().min(2).max(50).required(),
    });
    return schema.validate(setting, {abortEarly: false});
}

exports.Settings = Settings;
exports.validate = validateSetting;
