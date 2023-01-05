// for run main app

// define express.js
const { application } = require("express");
const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const productsRouter = express.Router();

const app = express();
const port = process.env.PORT;

app.use(morgan("combined"));

// base static web
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views"); //set views path
app.set("view engine", "ejs");

productsRouter.route("/").get((req, res) =>{
  res.send("Bello Product")
});

productsRouter.route("/1").get((req, res) =>{
  res.send("Bello Product 1")
});

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
