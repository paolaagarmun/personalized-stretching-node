const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();


//connect to db
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to db..."))
    .catch(() => console.log("Couldn't connect to db..."))

//middleware connections
app.use(express.json());
app.use(cors());

//routes
//test route
// app.get('/', (request, response) => {
    
//     response.json({message: "works"})
// });
//app routes
app.use("/api/v1/exercises", require('./routes/exercise'));
app.use("/api/v1/routines", require("./routes/routine"));
app.use("/api/v1/auth", require("./routes/auth"));



//set up PORT
const port = process.env.PORT ;
app.listen(port,() => console.log('Server is running...'));