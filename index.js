const mongoose = require('mongoose');
const Student1 = require('./models/student1.model');
const Student2 = require("./models/student2.model");
const Student3 = require("./models/student3.model");
const queries = require("./queries");

//------------------------- DB connection-----------------------------
mongoose.connect('mongodb://localhost/testdb', {family: 4}, (err) => {
    if(err){
        console.log('Error occurred');
    }
    else {
        console.log('connected');
        //dbOperations();
        //nestedSchema();
        //invalidSchema();
        //findById();
        //findByName();
        //findOneEntry();
        //deleteOne();
    }
});


//------------------------DB operations------------------------------------
async function dbOperations() {
    try{
        const student = await Student1.create({
            name: "Manav",
            age: 98
        });
        console.log(student);
    } catch{
        console.log(err.message);
    }
    // student.save().then(() => console.log("done"));
}

async function nestedSchema() {
    try {
        const student = await Student2.create({
            name: "Manav",
            age: 98,
            subjects: ["DS", "BE"]
        });
        console.log(student);
    } catch (error) {
        console.log(error.message);
    }
}

async function invalidSchema() {
    try {
        const student = await Student3.create({
            name: "Manav",
            age: 98,
            //subjects: ["DS", "BE"],
            subjects: ["DS", "BE" , "node.js", "mongodb"],
            email: "manav@gmail.com"
        });
        console.log(student);
    } catch (error) {
        console.log(error.message);
    }
}