const express = require('express');
const router = express.Router();

const Exercise = require('../models/Exercise');

//create exercise
router.post("/exercise", async (req, res) => {
    const exerciseToCreate = await Exercise.create(req.body);
    try {
        return res.status(201).json(exerciseToCreate);
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't create exercise"})
    }
})

//get all exercises
router.get("/", async (req, res) => {
    const exercises = await Exercise.find();
    try {
        if (exercises.length === 0) {
            return res.status(400).json({message: "No exercises available"})
        }
        return res.status(200).json(exercises)
    }
    catch (error) {
        return res.status(500).json({message: "Couldn't retrieve exercises"})
    }
});

//get one exercise
router.get("/exercise/:id", async (req,res) => {
    const { id } = req.params;
    const singleExercise = await Exercise.findById(id);
    try {
        return res.status(200).json(singleExercise)
    } catch (error) {
        return res.status(500).json({message: "Couldn't retrieve exercise"})
    }
})

//edit one exercise
router.put("/exercise/:id", async (req,res) => {
    const {id} = req.params;
    const exerciseToUpdate = await Exercise.findByIdAndUpdate( id, req.body,{new:true});
    try {
        return res.status(202).json(exerciseToUpdate);
    }
    catch {
        return res.status(500).json({message: "Couldn't update exercise"})
    }
});

//delete one exercise
router.delete("/exercise/:id", async (req, res) => {
    const { id } = req.params;
    await Exercise.findByIdAndDelete(id);
    try {
        return res.status(203).json({message: "Deleted successfully"});
    }
    catch {
        return res.status(500).json({message: "Coldn't delete the exercise"})
    }
})

module.exports = router;