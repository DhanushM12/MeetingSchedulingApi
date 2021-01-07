const Meetings = require('../models/meeting');
const Participants = require('../models/participants');

module.exports.createMeeting = async function (req, res) {
  //make a condition if there is a meeting at same time
    try {
      let meeting = await Meetings.create({
        title: req.body.title,
        start_time: req.body.start_time,
        end_time: req.body.end_time
      });
        return res.status(200).json({
          data: {
           meeting: meeting,
          },
          message: "Meeting Created!",
        });
    } catch (err) {
      console.log("error", err);
      return res.status(400).json({
        message: "cannot create meeting"
      })
    }
  };

  module.exports.getMeeting = async function(req, res){
    try{
    const id=req.params.id;

    const meetingDetails=Meetings.findOne(id)
    
    if(meetingDetails!=null){
      res.status(200).json({meetingDetails})
    }
  }
  catch (err) {
    console.log("error", err);
    return res.status(400).json({
      message: "cannot find meeting"
    })
  }
  }