const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    email: String, 
    program: String
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;