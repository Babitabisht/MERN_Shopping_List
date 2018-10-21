const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
  const path= require('path');
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


//serve static assests if in production

if(process.env.NODE_ENV==='production'){

app.use(express.static('client/build'));

app.get('*',(req,res)=>{

  res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})

}

  const port =process.env.port || 5000;

  app.listen(port, ()=>console.log(`app running on port ${port}`) );