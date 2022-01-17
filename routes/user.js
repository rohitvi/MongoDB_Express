const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.get('/',(req,res)=>{
    res.send("base route");
});
router.post('/',async (req,res)=>{
    // console.log(req.body);
    const user = new User({
        title:req.body.title,
        username:req.body.username
    });
    // user.save()
    try {
        const savedData=await user.save();
        res.json(savedData);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports = router;