require("dotenv").config(); //allows env file
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");//allows to receive requests on cross-origins
const ConnectToDb = require("./config/connectToDb");//This pulls our Mongoose(MongoDB) connection into the application
// const Note = require("./models/note");
// const Candy = require("./models/candy");
const notesController = require("./controllers/notesControllers");
const candyController = require("./controllers/candyControllers");


app.use(cors());//use as middleware
app.use(express.json({extended: true}));//express doesn't convert to JSON naturally
app.use(express.urlencoded({extended: true}))

ConnectToDb(); //This initializes our connectToDb function from the config folder
//---------------> Database Connection
// -------------------------------------------------reQs
// -------------------------------------------------Routing


app.get("/",(req,res)=>{
    res.send("This is a Landing Page")
})

// Obj: We want to establish CRUD routes for our Notes Model 
app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]

app.get("/notes/:id", notesController.fetchNote);

// -----------------> GET a Specific Note by ID - [Read]

app.post('/notes', notesController.createNote);
// -----------------> Create a Notes - [Create]

app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]

// - -  - - - - - -- - - - - -- - - - - - - - - - - -- - - - -- 

app.get("/candies", candyController.fetchAllCandies);
//fetchAllCandies

app.get("/candies/:id", candyController.fetchOneCandy);
//fetchOneCandy

app.post("/candies", candyController.createCandy);
//createCandy

app.put("/candies/:id", candyController.updateCandy);
//updateCandy

app.delete("/candies/:id", candyController.deleteCandy);
//deleteCandy







app.listen(PORT, () => {
    console.log(`Express sevrer listening on port num ${PORT}`)
} );