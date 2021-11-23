const { Schema, model } = require("mongoose");

const RoutineSchema = Schema({
    user: {
       type: Schema.Types.ObjectId,
       required: true,
       trim: true,
       ref: "User"
    },
    exercise1: {
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Exercise"
    },
    exercise2: {
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Exercise"
    },
    exercise3: {
        type: Schema.Types.ObjectId,
        trim: true,
        ref: "Exercise"
    },
    notes: {
        type: String,
        required: true
    }
})

module.exports = model("Routine", RoutineSchema);