const mongoose = require("mongoose");

const { Schema } = mongoose;

const defaultImage = "../client/public/images/cadmium-images/cadmiumCircle.png";

const eventSchema = new Schema({
  // EventForm's dateFormat="MMMM d, yyyy h:mm aa"

  date: {
    // timestamp includes date and time
    // make sure it works with datepicker casey added in EventForm
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  locationName: {
    type: String,
    required: true,
  },
  locationAddress: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    default: defaultImage,
  },
  link: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;
