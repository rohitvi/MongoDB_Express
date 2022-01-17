const express = require("express");
const app = express();
const mongoose = require("mongoose");
// import routes
const Users= require('./routes/user');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
require("dotenv/config");
mongoose.connect(process.env.DB)
.then( () => console.log("connected to DB."))
.catch( (err) => console.log(err));

app.use('/user',Users);





app.listen(3000);