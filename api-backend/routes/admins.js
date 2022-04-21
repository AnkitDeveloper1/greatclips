const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');

// List
router.get('/', async (req, res) => {
    let user = await User.find({user_type: "admin"});
    
    res.json({
        "success": true,
        "data": user
    });
})

// Get Rols Access
router.get('/getroles/', async (req, res) => {
    const filePathRoles = path.join(process.cwd(), 'dummy', 'role_access.json');
    const jsonDataRoles = await fs.readFile(filePathRoles);
    const roles = JSON.parse(jsonDataRoles);
    
    res.json({
        "success": true,
        "data": roles
    });
})

// Update Rols Access
router.post('/updateroles/:id', async (req, res) => {
    let query = { _id: Object(req.params.id) };
    let user = {assigned_roles: req.body.assigned_roles};
    await User.updateOne(query, user);

    let userss = await User.findOne({_id: req.params.id});

    
    res.json({
        "success": true,
        "message": "Assign Roles Successfully!",
        "roles": user,
        "userss" :userss
    });
})

// Get Admin
router.get('/:id', async (req, res) => {
    
    let user = await User.findOne({_id: req.params.id});
    
    res.json({
        "success": true,
        "data": user
    });
});

// Add
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
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        user_type: (req.body.user_type?req.body.user_type:"user"),
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const response = await user.save();

    const token = user.generateAuthToken();
    res.json({
        "success": true,
        "message": "User Registed Successfully!",
        "token": token,
        "response": response._id
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

module.exports = router;
