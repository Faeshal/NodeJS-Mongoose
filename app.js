const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

app.use  (bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);

mongoose
  .connect(
    "mongodb+srv://<username>:<password>@clusterfruit-gtqj8.mongodb.net/shop?retryWrites=true", {useNewUrlParser: true} 
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
