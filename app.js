// Const variables

const trigl = 801.2;
const indIct = 23.8;
const hdl = 172.7;
const bk = 0.18;
const sgot = 263;
const f = 115.2;
const sgpt = 272;
const lipidos = 0.03
const t = 6.1;
const ure = 25.7
const uri = 3.25
const z = 11.42


//  NodeJs Libs
const express = require("express");
const express = require("express");
const mongoose = require("mongoose");
var mongoose = require('mongoose');


// Start up

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/QuimicaDB', {useNewUrlParser: true});







app.listen(3000, function () {
    console.log("Server started on port 3000");
  });