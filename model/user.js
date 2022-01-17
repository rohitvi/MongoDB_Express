const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    title:{
        type : String,
        required:true
    },
    username:{
        type : String,
        required:true
    }
});

module.exports = mongoose.model("user",UserSchema);