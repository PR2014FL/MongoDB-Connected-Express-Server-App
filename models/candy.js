const mongoose = require("mongoose");

//-----vvvvvv----------------
const candySchema = new mongoose.Schema({//set the schema
    kind: String,
    flavor: String
});

const Candy = mongoose.model("Candy", candySchema); //this is the model

module.exports = Candy;