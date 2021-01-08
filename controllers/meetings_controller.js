const Meetings = require('../models/meeting');
const Participants = require('../models/participants');

module.exports.createMeeting = async function (req, res) {
  //make a condition if there is a meeting at same time
  //let st = new Date();
  //let et = new Date(st);
 et.setHours(et.getHours()+1);
    try {
      console.log(req.body);
      let meeting = await Meetings.create({
        title: req.body.title,
        participants: req.body.participants,
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
    /*try{
    const id=req.params.id;

    const meetingDetails= await Meetings.findOne(id)
    
    if(meetingDetails!=null){
      res.status(200).json({meetingDetails})
    }
  }
  catch (err) {
    console.log("error", err);
    return res.status(400).json({
      message: "cannot find meeting"
    })
  }*/
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
          data: data,
          message: "Meeting Found in start and end!",
        });
    }
  })};