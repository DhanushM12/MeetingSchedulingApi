const express = require("express");
const router = express.Router();
const participantsController = require('../controllers/meetings_controller');

console.log("router loaded");
//for any other routes, access from here
//router.use('/routerName', require('./routerFile'));
router.post('/participants', participantsController.createParticipants);
router.use("/meetings", require("./meetings"));

module.exports = router;
