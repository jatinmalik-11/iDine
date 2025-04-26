const mongoose = require('mongoose')
const database = require('./database')
const schema = require('../schema')

main()
.then((res) => {
    console.log(res);
    console.log("Connection built successfully");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/iDine');
}

const insertData = async () => {
    await schema.deleteMany();
    await schema.insertMany(database.data);
    console.log("Data was initialized.")
}

insertData();