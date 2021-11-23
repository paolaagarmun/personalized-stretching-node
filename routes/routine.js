const express = require('express');
const router = express.Router();

const Routine = require('../models/Routine')

//create user's routine
router.post("/routine/", async (req, res) => {
    const routineToCreate = await Routine.create(req.body);
    try {
        return res.status(201).json(routineToCreate)
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't create routine"})
    }
});

//update an existing routine
router.put("/routine/:id", async (req, res) => {
    const {id} = req.params;
    const routineToUpdate = await Routine.findByIdAndUpdate(id, req.body, {new:true});
    try {
        return res.status(202).json(routineToUpdate)
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't update the routine"});
    }
});

module.exports = router;