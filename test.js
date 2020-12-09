const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
mongoose.connect("mongodb://localhost:27017/QuimicaDB_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const receptionSchema = new Schema({
  testId: {
    type: Number,
    required: true,
    unique: true,
  },
  resultsReceived: [],
  currentStatus: String,
  userReference: { type: Schema.Types.ObjectId, ref: "user" },
});

const Reception = mongoose.model("reception", receptionSchema);

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Insert Name"],
  },
  lastName: {
    type: String,
    required: [true, "Please Insert Lastname"],
  },
  birthDate: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: [true, "Ingrese numero telefonico"],
    validate: (phone) => phone.length > 9,
    message: "Please add a valid 10 digit phone number",
  },
  phoneB: String,
  email: {
    type: String,
    required: [true, "Please Insert email"],
  },
  emailB: String,
  reception: [],
  referece: { type: Schema.Types.ObjectId, ref: "reception" },
  Gender: String,
});
