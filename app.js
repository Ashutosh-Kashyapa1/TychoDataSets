const express = require('express')
const app =express()
const connection =require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const mongoose = require('mongoose')
require('dotenv').config();
var PORT =process.env.Port
app.set('view engine','ejs')
const path =require('path') 
const cors = require('cors');
app.use(cors());
const session = require('express-session');
const SESSION_SECRET = process.env.SESSION_SECRET;
app.set("views",path.resolve('./views'))//telling express about path of views
app.use(express.static("public"))
// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // Ensure static files load

app.use(express.static("public", {
    etag: false, 
    lastModified: false, 
    cacheControl: false
  }));
  
if (!SESSION_SECRET) {
    throw new Error("SESSION_SECRET is not defined in the .env file");
}

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to `true` if using HTTPS
}));




//import router files
const userRoutes= require("./routes/userRoutes")


//use the app
app.use(userRoutes)



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
