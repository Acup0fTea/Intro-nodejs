// for run main app

// define express.js
const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT;
const productsRouter = require("./src/routers/productsRoter");
const mongodb = require("./db")

app.use(morgan("combined"));

mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database successfully connected');
}, error => {
    console.log('Database error: ' + error);
})

// base static web
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views"); //set views path
app.set("view engine", "ejs");

// routing
app.use("/products", productsRouter)

// manage request handlers
app.get("/", (req, res) => {
  res.render("index", {
    username: "Bello-UWU",
    customer: ["Thana", "Pawares", "Siwakorn"],
  });
});

// app listen on PORT
app.listen(port, () => {
  debug("Listening on port " + port);
});
