const Meetings = require('../models/meeting');
const Participants = require('../models/participants');

module.exports.createMeeting = async function (req, res) {
  //let st = new Date();
  //let et = new Date(st);
 //et.setHours(et.getHours()+1);
    try {
      console.log(req.body);
      let meeting = await Meetings.create({
        title: req.body.title,
        participants: req.body.participants.email,
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

  module.exports.createParticipants = async function (req, res) {
    //let st = new Date();
    //let et = new Date(st);
   //et.setHours(et.getHours()+1);
      try {
        console.log(req.body);
        let participants = await Participants.create({
          name: req.body.name,
          email: req.body.email,
        });
          return res.status(200).json({
            data: {
             participants: participants
            },
            message: "Participants Created!",
          });
    
      } catch (err) {
        console.log("error", err);
        return res.status(400).json({
          message: "cannot create participants"
        })
      }
    };

  module.exports.getMeeting = function(req, res){
    Meetings.findOne({_id: req.params.id} , function (err, data) { 
      if (err){ 
          console.log(err)
          return res.status(400).json({
            message: "not found meeting"
          })
      } 
      else{ 
          console.log("Result : ", data); 
          return res.status(200).json({
            data: data,
            message: "Meeting Found!",
          });
      } 
  }); 
  }

  module.exports.listMeetings = function(req, res){
  let start = req.query.start;
  let end = req.query.end;
  Meetings.find({
    start_time: {$gte: start},
    end_time: {$lt: end}
  }, function (err, data) { 
    if (err){ 
        console.log(err)
        return res.status(400).json({
          message: "not found meeting with start and end"
        })
    } 
    else{ 
        console.log("Result : ", data); 
        return res.status(200).json({
         data:[data],
          message: "Meeting Found in start and end!",
        });
    }
  })};

  module.exports.participantsMeetings = function(req, res){
    let participant = req.query.email;
    let pe = participants.email;
    Meetings.find({pe: participant}, function (err, data) { 
      if (err){ 
          console.log(err)
          return res.status(400).json({
            message: "no meeting found of participant"
          })
      } 
      else{ 
          console.log("Result : ", data); 
          return res.status(200).json({
            data: data,
            message: "Meetings Found of a participant!",
          });
      } 
  })

  }