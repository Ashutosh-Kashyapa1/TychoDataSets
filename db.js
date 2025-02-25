
const mongoose = require("mongoose")
//its tells the db file about .env file.
require('dotenv').config();
// Define mongoDb connection url which is present in .env file .
const mongoUrl =process.env.MONGODB_URL_LOCAL
//setup mongoDb connection.
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//Get the default connection
//mongoose maintain default connection objects representing the mongoDbconnection.
const db =mongoose.connection;

//define event listener for database connection
db.on('connected', ()=> {
    console.log('Connected to MongoDB Server');
})
db.on('disconnected', ()=>{
    console.log('Disconnected from MongoDB Server')
})
db.on('error', (error)=>{
    console.error('MongoDB connection error:', error);
})
//Export the database connection.
module.exports=db

