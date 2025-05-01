const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    description: String
});
const Schema = mongoose.model('Schema', menuSchema);

module.exports = Schema;