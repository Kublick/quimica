//jshint esversion:6
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
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Start up

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/QuimicaDB', {useNewUrlParser: true, useUnifiedTopology: true });

//  Database Schemas

const pacientesSchema = {
  Nombre: String,
  NombreDoctor: String,
  Folio: String,
  FechaNacimiento: Number,
  TomaDeMuestra: Number,
  FechaReporte: Number,
  Fecha: Number,
};

  const Pacientes = mongoose.model("Pacientes", pacientesSchema);

app.get("/", function (req, res) {
  console.log("entered app");
  res.redirect("/index.html");
});


app.post("/", function (req, res){

  const NombrePaciente = req.body.nombrePaciente;
  const NombreDoctor = req.body.nombreDoctor;
  const Folio = req.body.folio;

  const PacientesL = new Pacientes({
    Nombre: NombrePaciente,
    NombreDoctor: NombreDoctor,
    Folio: Folio,
  });

  //save to database
    PacientesL.save();
});



app.listen(3000, function () {
    console.log("Server started on port 3000");
  });