const express = require('express');
const mongoose = require('mongoose');

const app = express();


//connect to db
mongoose.connect('mongodb://localhost/personalizedStretching')
    .then(() => console.log("Connected to db..."))
    .catch(() => console.log("Couldn't connect to db..."))

//first route
app.get('/', (request, response) => {
    
    response.json({message: "works"})
});


//set up PORT
const port = 5000;
app.listen(port,() => console.log('Server is running...'));