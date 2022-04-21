const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const multer = require('multer');

// List
router.get('/', async (req, res) => {
    let user = await User.find({user_type: "user"});
    
    res.json({
        "success": true,
        "data": user
    });
})

// Register User
router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let user = await User.findOne({email: req.body.email});
    if(user) {
        return res.json({
            "success": false,
            "message": "user already registered",
        });
    }

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,

    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    res.json({
        "success": true,
        "message": "User Registed Successfully!",
        "token": token
    });
});

// Put
router.put('/:id', async (req, res) => {
    const userid = req.params.id;

    const {error} = validate(req.body, false);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let user = await User.findOne({email: req.body.email, _id: { $ne: userid } });
    if(user) {
        return res.json({
            "success": false,
            "message": "user already registered",
        });
    }
    let query = { _id: Object(req.params.id) };
    user = [];
    const salt = await bcrypt.genSalt(10);
    if(req.body.password) {
        user['password'] = await bcrypt.hash(req.body.password, salt);
    }

    user['name'] = req.body.name;
    user['mobile'] = req.body.mobile;
    user['email'] = req.body.email;
    user['password'] = req.body.password;
    user['user_type'] = (req.body.user_type?req.body.user_type:"user");
    await User.updateOne(query, user);
    
    res.json({
        "success": true,
        "message": "User Updated Successfully!",
        "token": token
    });
});

// Delete
router.delete('/:id', async (req, res) => {
    let user = await User.findOne({_id: Object(req.params.id) });
    
    if(!user) {
        return res.json({
            "success": false,
            "message": "User not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    await User.deleteOne(query);

    res.json({
        "success": true,
        "message": "User deleted successfully"
    });
})

// Payments User
router.post('/payments/:id', async (req, res) => {
    /*const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });*/
    
    let user = await User.findOne({_id: req.params.id});
    if(user) {
        let query = { _id: Object(req.params.id) };
        user['card_details']['card_type'] = req.body.card_type;
        user['card_details']['card_number'] = req.body.card_number;
        user['card_details']['card_expire'] = req.body.card_expire;
        delete user['_id'];
        await User.updateOne(query, user);

        res.json({
            "success": true,
            "user" : user,
            "message": "User Registed Successfully!",
        });
    } else {
        res.json({
            "success": false,
            "user" : req.params.id,
            "message": "User Registed Successfully!",
        });
    }
});

module.exports = router;
