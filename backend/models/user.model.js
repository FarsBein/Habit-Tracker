const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        trim: true }
    },{
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema)