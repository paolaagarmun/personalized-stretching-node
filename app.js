const express = require('express');

const app = express();


//first route
app.get('/', (request, response) => {
    
    response.json({message: "works"})
});


//set up PORT
const port = 5000;
app.listen(port,() => console.log('Server is running...'));