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
app.use(express.json());

app.get('/admin' , async (req,res) => {
    try{    
    const response = await schema.find();
    res.json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error"); 
    }
});

//Update
app.put('/admin/:id', async (req, res) => {
    try {
        const updatedItem = await schema.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );
        res.json(updatedItem);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating item");
    }
});


app.listen(5000, () => {
    console.log("Server is listening to port 5000");
})