const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items =require('./routes/api/items');

const app = express();

//Body PArser
app.use(bodyParser.json());

// DB config

const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("mongo connected........"))
  .catch(err => console.log(err));


  //Routes

  app.use('/api/items',items);


  const port =process.env.port || 5000;

  app.listen(port, ()=>console.log(`app running on port ${port}`) );