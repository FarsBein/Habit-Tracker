const express = require('express');
const router = express.Router();
const User = require('../models/user.model');


// get all
router.get('/',(req,res) => {
    User.find() // mongoose method
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err))
}) 
// get one
// create 
router.post('/add', (req,res) => {
    const username = req.body.username
    const newUser = new User({username}) // or username: username
    newUser.save()
        .then(() => res.json('New User Added!'))
        .catch((err) => res.status(400).json('Error: '+ err))
})
// update
//delete

module.exports = router;