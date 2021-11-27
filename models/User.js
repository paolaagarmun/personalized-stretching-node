const { Schema, model } = require("mongoose");

const UserSchema = Schema(
    {
        name: {
            type:String, 
            required:true, 
            trim:true
        },
        email: {
            type:String, 
            required:true, 
            trim:true, 
            unique:true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
            enum: ["USER", "ADMIN"],
            default: "USER"
        },
        weightCarried: {
            type: String
        },
        handUse: {
            type: String
        },
        sittingTime: {
            type: String
        },
        standingTime: {
            type: String
        },
        routine: {
            type: Schema.Types.ObjectId,
            trim: true,
            ref: "Routine"
        }
    }
)

UserSchema.methods.toJSON = function() {
    const {password, __v, ...user} = this.toObject();
    return user;
}

module.exports = model("User", UserSchema);