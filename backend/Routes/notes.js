const express = require('express');
const router = express.Router();
const Notes = require('../models/notes.model');

// get all 
router.get('/', (req,res) => {
    Notes.find()
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: '+ err))
})
// get one
router.get('/:id', (req,res) => {
    Notes.findById(req.params.id)
        .then(note => res.json(note))
        .catch(err => res.status(400).json('Error: '+ err))
})
// create 
router.post('/add',(req,res) => {
    const note = {
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date) ? Date.parse(req.body.date) : Date.now()
    }
    const newNote = new Notes({...note})
    newNote.save()
        .then(()=> res.json('New Note Added!'))
        .catch((err) => res.status(400).json('Error: '+ err))
})
// update
router.post('/update/:id',(req,res) => {
    Notes.findById(req.params.id)
        .then(note => {
            note.username= req.body.username ? req.body.username : note.username;
            note.description= req.body.description ? req.body.description : note.description;
            note.duration= req.body.duration ? req.body.duration: note.duration;
            note.date= Date.parse(req.body.date) ? Date.parse(req.body.date) : Date.now();
            note.save()
                .then(() => res.json('Note is Updated!!'))
                .catch((err) => res.status(400).json('Error: '+ err))
        })
        .catch((err) => res.status(400).json('Error: '+ err))
})
//delete
router.delete('/delete/:id',(req,res) => {
    Notes.findByIdAndDelete(req.params.id)
        .then(()=> console.log('Deleted'))
        .then(()=> res.json('Note is deleted'))
        .catch((err) => res.status(400).json('Error: '+ err))
})
module.exports = router