require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')

const port = 5000 || process.env.port
const uri = process.env.ATLAS_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.on('open', () => {
    console.log('data base is connected')
})

app.use(express.json())
app.use(cors())

app.use('/notes', require('./Routes/notes'))
app.use('/users', require('./Routes/users'))


app.listen(port,() => console.log('Server is running on port '+ port))

