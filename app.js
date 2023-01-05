// for run main app 

// define express.js
const { application } = require('express');
const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port =  process.env.PORT;

app.use(morgan('combined'));

// base static web
app.use(express.static(path.join(__dirname, "/public/")));

// manage request handlers
app.get('/', (req, res) =>{
    res.send('Hello World');
});

// app listen on PORT
app.listen(port, () =>{
    debug("Listening on port " + port);
}
);