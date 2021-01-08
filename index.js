const express = require("express");
const app = express();
const port = 8000;
const bodyparser = require('body-parser');
const db = require('./config/mongoose');

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));
app.use("/", require("./routes"));

app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
  });