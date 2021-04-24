const mongoose = require("mongoose");
const express = require("express");
const formidable = require("express-formidable");
require("dotenv").config();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.on("connected", function () {
  console.log("Mongoose Connected");
});

const app = express();
app.use(formidable());

const root = require("./routes/root");
app.use(root);

const post = require("./routes/post");
app.use(post);

app.listen(process.env.PORT, () => {
  console.log("server is running at http://localhost:3000");
});
