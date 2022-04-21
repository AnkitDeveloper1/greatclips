const {Attend, validate} = require('../models/attend');
const express = require('express');
const router = express.Router();
const authentication = require('../middleware/auth');

// Get Atend
router.get('/getbystatus/:status?', async (req, res) => {
    let parameters = {};
    if(req.params.status) {
        parameters = {status: req.params.status}
    }
    let attend = await Attend.find(parameters).sort({_id: -1});
    
    res.json({
        "success": true,
        "data": attend
    });
});

// Get Atend
router.post('/getattenddetail', async (req, res) => {
    let attend = await Attend.findOne({user_id: req.body.user_id, saloon_id: req.body.saloon_id}).sort({_id: -1});
    
    res.json({
        "success": true,
        "data": attend
    });
});

// Check In
router.post('/checkin/', async (req, res) => {
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });

    // Check Attend Check In exists or not
    const attend_detail = await Attend.findOne({user_id: req.body.user_id, saloon_id: req.body.saloon_id}).sort({_id: -1});
    if(attend_detail) {

        let current_date = new Date().getTime();
        //current_date = current_date.getDate()+"-"+(current_date.getMonth()+1)+"-"+current_date.getFullYear();
        let attend_date = new Date(attend_detail.check_in).getTime();
        //attend_date = attend_date.getDate()+"-"+(attend_date.getMonth()+1)+"-"+attend_date.getFullYear();


        if((!attend_detail.check_out || attend_detail.check_out === "undefined") && attend_date <= current_date) {
            return res.json({
                "success": false,
                "message": "Attend already exists",
            });
        }
    }

    attend = new Attend({
        user_id: req.body.user_id,
        saloon_id: req.body.saloon_id,
        check_in: new Date().getTime()
    });

    await attend.save();
    
    res.json({
        "success": true,
        "message": "Check In added successfully"
    });
});

// Check Out
router.post('/checkout/', authentication, async (req, res) => {
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });

    // Check Attend Check In exists or not
    const attend_detail = await Attend.findOne({user_id: req.body.user_id, saloon_id: req.body.saloon_id}).sort({_id: -1});
    if(attend_detail) {

        let current_date = new Date();
        current_date = current_date.getDate()+"-"+(current_date.getMonth()+1)+"-"+current_date.getFullYear();
        let attend_date = new Date(attend_detail.check_in);
        attend_date = attend_date.getDate()+"-"+(attend_date.getMonth()+1)+"-"+attend_date.getFullYear();


        if(attend_date !== current_date) {
            return res.json({
                "success": false,
                "date": attend_date,
                "message": "Attend already exists",
            });
        }
    }
    
    let attend = await Attend.findOne({_id: Object(attend_detail._id)});
    if(!attend) {
        return res.json({
            "success": false,
            "message": "Attend not exists",
        });
    }
    let query = { _id: Object(attend_detail._id) };
    attend['check_out'] = new Date().getTime();
    delete attend['_id'];
    await Attend.updateOne(query, attend);

    res.json({
        "success": true,
        "message": "Attend updated successfully"
    });
});

// Accept In
router.post('/acceptin/:id', authentication, async (req, res) => {
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let attend = await Attend.findOne({_id: Object(req.params.id)});
    if(!attend) {
        return res.json({
            "success": false,
            "message": "Attend not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    attend['status'] = "accept";
    attend['saloon_id'] = req.body.saloon_id;
    attend['accepted_on'] = new Date().getTime();
    delete attend['_id'];
    await Attend.updateOne(query, attend);

    res.json({
        "success": true,
        "message": "Accepted updated successfully"
    });
});

// Reject Out
router.post('/rejectout/:id', authentication, async (req, res) => {
    
    const {error} = validate(req.body);
    if(error) return res.json({
        "success": false,
        "errors": error.details,
    });
    
    let attend = await Attend.findOne({_id: Object(req.params.id)});
    if(!saloon) {
        return res.json({
            "success": false,
            "message": "Attend not exists",
        });
    }
    let query = { _id: Object(req.params.id) };
    attend['status'] = "reject";
    attend['saloon_id'] = req.body.saloon_id;
    attend['rejected_on'] = new Date().getTime();
    delete attend['_id'];
    await Attend.updateOne(query, attend);

    res.json({
        "success": true,
        "message": "Rejected updated successfully"
    });
});

// Get Users applied saloon History
router.get('/history/:id', authentication, async (req, res) => {
    //let attend = await Attend.find({user_id: req.params.id}).sort({_id: -1});
    
    const attend = await Attend.aggregate([ 
        {
            $addFields: {
                user_id: {
                    $toObjectId: "$user_id"
                },
                saloon_id: {
                    $toObjectId: "$saloon_id"
                }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "user_id",
                foreignField: "_id",
                as: "userDetail"
            }
        },
        {
            $lookup: {
                from: "saloons",
                localField: "saloon_id",
                foreignField: "_id",
                as: "saloonDetail"
            }
        }
    ]);

    res.json({
        "success": true,
        "data": attend
    });
})

module.exports = router;
