const express = require("express");
const router = express.Router();
const meetingsController = require('../controllers/meetings_controller');
//create meeting route
router.post('/', meetingsController.createMeeting);


//get meeting route
router.get('/:id', meetingsController.getMeeting);

router.get('/', meetingsController.listMeetings);

router.get('/', meetingsController.participantsMeetings);

module.exports = router;
