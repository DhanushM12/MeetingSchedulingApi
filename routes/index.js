const express = require("express");
const router = express.Router();

console.log("router loaded");
//for any other routes, access from here
//router.use('/routerName', require('./routerFile'));
router.use("/meetings", require("./meetings"));

module.exports = router;
