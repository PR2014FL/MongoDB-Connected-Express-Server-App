require("dotenv").config(); //allows env file
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");//allows to receive requests on cross-origins
const ConnectToDb = require("./config/connectToDb");//This pulls our Mongoose(MongoDB) connection into the application
const notesRouter = require("./routes/notes");
// const Note = require("./models/note");
// const Candy = require("./models/candy");
const notesController = require("./controllers/notesControllers");
const candyController = require("./controllers/candyControllers");
const studentController = require("./controllers/studentControllers");

app.use(cors());//use as middleware
app.use(express.json({extended: true}));//express doesn't convert to JSON naturally
app.use(express.urlencoded({extended: true}))
app.use("/notes", notesRouter);

ConnectToDb(); //This initializes our connectToDb function from the config folder
//---------------> Database Connection
// -------------------------------------------------reQs
// -------------------------------------------------Routing


app.get("/",(req,res)=>{
    res.send("This is a Landing Page")
});

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


app.get("/students", studentController.fetchAllStudents);

app.get("/students/:id", studentController.fetchStudent);

app.post("/students", studentController.createStudent);

app.put("/students/:id", studentController.updateStudent);

app.delete("/students/:id", studentController.deleteStudent); 





app.listen(PORT, () => {
    console.log(`Express sevrer listening on port num ${PORT}`)
} );