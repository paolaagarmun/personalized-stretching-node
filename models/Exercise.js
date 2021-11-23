const { Schema, model } = require("mongoose");

const ExerciseSchema = Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        bodypartTarget: {
            type: String,
            required: true,
        },
        videoURL: {
            type: String
        },
        image: {
            type: String
        },
        explanation: {
            type: String
        }
    }
)

module.exports = model("Exercise", ExerciseSchema)