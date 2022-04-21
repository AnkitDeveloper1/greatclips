const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 255
    },
    mobile: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    user_type: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted'],
        default : 'accepted'
    },
    assigned_roles: {
        type: Object,
    },
    card_details: {
        card_type: {
            type: String,
            //required: true,
            minlength: 2,
            maxlength: 50
        },
        card_number: {
            type: String,
            //required: true,
            minlength: 2,
            maxlength: 50
        },
        card_expire: {
            type: String,
            //required: true,
            minlength: 2,
            maxlength: 50
        },
    },
    created_on: {
        type : Date,
        default: Date.now
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, name: this.name}, config.get('jwtprivateket'));
    return token;
}

const User = mongoose.model('User', userSchema);


function validateUser(user, isNotUpdate = true) {
    let validate = {
        name: Joi.string().min(3).max(50).required(),
        mobile: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        user_type: Joi.string().min(5).max(255).required()
    };
    if(isNotUpdate) {
        validate['password'] = Joi.string().min(5).max(255).required();
        validate['confirmPassword'] = Joi.any().equal(Joi.ref('password'))
        .required()
        .label('Confirm password')
        .options({ messages: { 'any.only': '{{#label}} does not match'} })
    }
    const schema= Joi.object(validate);
    return schema.validate(user, {abortEarly: false});
}

exports.User = User;
exports.validate = validateUser;