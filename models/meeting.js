const mongoose = require("mongoose");

//meeting schema design
const meetingSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      required: true,
    },
    participants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Participants",
        },
      ],
    start_time:{
        type: Date,
      required: true,
    },
    end_time:{
        type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//passing the meetingSchema instance to mongoose.model
const Meetings = mongoose.model("Meetings", meetingSchema);

//exporting the schema to be used further
module.exports = Meetings;