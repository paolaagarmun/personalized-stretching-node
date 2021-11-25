const express = require('express')
const router = express.Router();

const User = require('../models/User')


//get users 
router.get("/", async (req, res) => {
    const users = await User.find().populate("routine")
    try {
        if (users.length === 0) {
            return res.status(400).json({message: "No users available"})
        }
        return res.status(200).json(users)
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't retrieve users"})
    }
});

//get one user (for user view)
router.get("/user/:id", async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate("routine")
    try {
        return res.status(200).json(user)
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't get the coffee"})
    }
})

module.exports = router;