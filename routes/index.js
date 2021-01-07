const express = require("express");
const router = express.Router();
const meetingsController = require('../controllers/meetings_controller');

console.log("router loaded");

//create meeting route
router.post('/meetings', meetingsController.createMeeting);

//get meeting
router.get('/meetings/:id', meetingsController.getMeeting);