const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    username: { type: String, require: true},
    description: { type: String, require: true},
    duration: { type: Number, require: true},
    date: { type: Date, default: Date.now()}
    },{
        timestamps: true
    });

module.exports = mongoose.model('Notes', notesSchema)