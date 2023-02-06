const mongoose = require('mongoose');


const connection = () =>{
    mongoose.connect("mongodb://localhost:27017/testing").then(() =>{
        console.log("connection successfully!")
    }).catch((error) =>{
        console.log(error)
    })
}

module.exports ={connection}