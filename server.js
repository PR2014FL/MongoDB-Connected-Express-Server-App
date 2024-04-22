require("dotenv").config; //allows env file
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");//allows to receive requests on cross-origins
const ConnectToDb = require("./config/connectToDb");//This pulls our Mongoose(MongoDB) connection into the application


app.use(cors());//use as middleware
app.use(express.json());//express doesn't convert to JSON naturally


ConnectToDb(); //This initializes our connectToDb function from the config folder
//---------------> Database Connection















app.listen(PORT, () => {
    console.log(`Express sevrer listening on port num ${PORT}`)
} );