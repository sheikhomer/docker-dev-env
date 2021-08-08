const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required:true,
            max:50,
            unique:true
        },
        firstName:{
            type: String,
            required:true,
            min:6
        },
        lastName:{
            type: String,
            default: ""
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);