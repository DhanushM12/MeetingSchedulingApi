const express = require("express");
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
  });