const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
const PORT = process.env.PORT;


 

// Middleware
const middleware = (req, res, next) => {
  next();
}

app.get('/',  (req, res) => {
    res.send("Hello i am connected to express HOME");
  });
app.get('/about', middleware,  (req, res) => {
    res.send("Hello i am connected to express ABOUT");
  });
app.get('/contact',  (req, res) => {
    res.send("Hello i am connected to express CONTACT");
  });

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));