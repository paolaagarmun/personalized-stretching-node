const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const { generateJwt } = require('../models/User')

//user sign-up
router.post("/signup", async (req, res) => {
    const { email } = req.body;
    const testEmail = await User.findOne({email});
    if (testEmail) {
        return res.status(500).json({message: "Couldn't signup, try again"})
    }
    const user = new User(req.body);
    try{
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(req.body.password, salt);
        user.save();
        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't create the user"});
    }
});

//login user
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if (!user) {
        return res.status(500).json({message: "Please check username"})
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(500).json({message: "Please check password"})
    }
    return res.status(200).json(user);
})

//user get routines

module.exports = router;