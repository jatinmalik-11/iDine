const express = require('express');
const app = express();
const mongoose = require('mongoose');
const axios  = require('axios');
const cors = require('cors');
const crud = require('./crud');
const schema = require('./schema');
const data = require('./database/database');

//db
main()
.then((res) => {
    console.log(res);
    console.log("Connection built successfully");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/iDine');
}

app.use(cors());

app.get('/admin' , async (req,res) => {
    try{    
    const response = await schema.find();
    res.json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error"); // Send an error response if something goes wrong
    }
});


// app.use('/admin' , crud);
// user
// user/home
// user/checkout
// admin
// admin/menu


app.listen(5000, () => {
    console.log("Server is listening to port 5000");
})