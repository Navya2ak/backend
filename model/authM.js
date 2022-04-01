const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' // references the users Model
    },
    token: {
        type: String,
        unique: true,
    },
    status: { type: Boolean, default: true },
}, {timestamps: true});
module.exports = mongoose.model("auth",userSchema);
