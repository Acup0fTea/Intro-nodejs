// for run main application

const express = require('express'); // defind the express
const debug = require('debug')('app');
const morgan = require('morgan'); // middleware

const app = express();
const PORT = 4000;

// for manage request
app.get('/', (req, res) =>{
    res.send("Bello Bello"); // log to localhost4000 page
    res.send("Bello Bello1");
});

app.use(morgan('combined'));

app.listen(PORT, () =>{
    console.log("listening on port " + PORT);
});