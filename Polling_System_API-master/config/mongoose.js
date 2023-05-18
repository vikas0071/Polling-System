// Import the mongoose module
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Set up default mongoose connection
// var mongoDB = process.env.MONGODB_URL;
var mongoURL = "mongodb://127.0.0.1:27017/polling"
// var mongoURL= 'mongodb+srv://vikasbishnoi99916:vikasbishnoi99916@cluster0.klctid8.mongodb.net/?retryWrites=true&w=majority'
module.exports = mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));
