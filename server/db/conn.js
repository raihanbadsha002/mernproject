const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() =>{
    console.log("connection successful");
  }).catch((err) => console.log("no connection"));