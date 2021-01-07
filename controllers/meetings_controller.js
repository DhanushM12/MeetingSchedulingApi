const Meetings = require('../models/meeting');
const Participants = require('../models/participants');

module.exports.createMeeting = async function (req, res) {
    try {
      let meeting = await Meetings.create({
        title: req.body.title,
        participants: req.participants._id,
        start_time: req.body.start_time,
        end_time: req.body.end_time
      });
  
      if (req.xhr) {
        return res.status(200).json({
          data: {
           meeting: meeting,
          },
          message: "Meeting Created!",
        });
      }
      return res.redirect("back");
    } catch (err) {
      console.log("error", err);
      return res.redirect("back");
    }
  };