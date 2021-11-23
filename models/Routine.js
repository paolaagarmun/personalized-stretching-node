const { Schema, model } = require("mongoose");

const RoutineSchema = Schema({
    user: {
       type: Schema.Types.ObjectId,
       required: true,
       trim: true,
       ref: "User"
    },
    exercise: {
        type: Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: "Exercise"
    },
    notes: {
        type: String,
        required: true
    }
})

module.exports = model("Routine", RoutineSchema);