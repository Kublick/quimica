
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
const moment = require("moment");

// Start up

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017/QuimicaDB', {useNewUrlParser: true, useUnifiedTopology: true });



//  Database Schemas

const pacientesSchema = {
  Nombre: String,
  ApeidoPaciente: String,
  Genero: String,
  NombreDoctor: String,
  Folio: String,
  FechaNacimiento: Number,
  TomaDeMuestra: Number,
  FechaReporte: Number,
  Fecha: Date
};

  const Pacientes = mongoose.model("Pacientes", pacientesSchema);

app.get("/", function (req, res) {
  res.send("On the root");
});


// ?? Cuando se necesite saber si es buky para las cuentas
// const temp = moment(req.body.fechaNacimiento);
// const now = moment();
// var adulto = now.diff(temp, 'years');

app.get ("/registro", function (req, res) {
  res.sendFile(__dirname + "/public/Registro.html");
});


app.post("/", function (req, res) {

  const NombrePaciente = req.body.nombrePaciente;
  const pacienteApeido = req.body.pacienteApeido;
  const genero = req.body.genero;
  const doctor = req.body.doctor;
  const folio = req.body.folio;
  const fechaNacimiento = moment(req.body.fechaNacimiento, 'YYYY-MM-DD', 'us', true);

  const PacientesL = new Pacientes({
    Nombre: NombrePaciente,
    ApeidoPaciente: pacienteApeido,
    Genero: genero,
    NombreDoctor: doctor,
    Folio: folio,
    FechaNacimiento: fechaNacimiento
  });

  // //save to database
  PacientesL.save();
    res.send("data submitted");
});

app.listen(3001, function () {
    console.log("Server started on port 3000");
  });