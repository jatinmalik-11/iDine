const express = require('express');
const app = express();
const mongoose = require('mongoose');
const crud = require('./crud');
const schema = require('./schema');
//db
main()
.then((res) => {
    console.log(res);
    console.log("Connection built successfully");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/iDine');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/admin' , (req,res) => {
    console.log("Root is working");
    res.send("hello");
    
});

//Schema
const menuSchema = new mongoose.Schema({
    picture: String,
    name: String,
    price: Number,
    description: String
});
const Schema = mongoose.model('Schema', menuSchema);

// app.use('/admin' , crud);
// user
// user/home
// user/checkout
// admin
// admin/menu


app.listen(5000, () => {
    console.log("Server is listening to port 5000");
})