const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    topic: { type: String, require: true},
    description: { type: String, require: true},
    duration: { type: Number, require: true},
    done:{type:Boolean, default: false},
    date: { type: Date, default: Date.now()}
    },{
        timestamps: true
    });

module.exports = mongoose.model('Notes', notesSchema)