const mongoose = require("mongoose");

//participants schema design
const participentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    rsvp: {
        type: String,
        default: 'Yes',
        enum: ['Yes', 'No', 'MayBe', 'Not Answered'],
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

//passing the participentSchema instance to mongoose.model
const Participants = mongoose.model("Participants", participentSchema);

//exporting the schema to be used further
module.exports = Participants;
