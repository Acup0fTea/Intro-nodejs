// for run main application

const express = require('express'); // defind the express
const debug = require('debug')('app');
const morgan = require('morgan'); // middleware

const app = express();
const PORT = 4000;

// for manage request
app.get('/', (req, res) =>{
    res.send("Hello Thana"); // log to localhost4000 page
});

app.use(morgan('combined'));

app.listen(PORT, () =>{
    debug("listening on port " + PORT);
});