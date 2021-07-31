const mongoose = require('mongoose');

const { Schema } = mongoose;

// for saved list of events
const listSchema = new Schema({
  // not really sure if this top one is necessary - originally for the shopping list for that date. We really just need the actual events
  savedDate: {
    type: Date,
    default: Date.now
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
});

const List = mongoose.model('List', listSchema);

module.exports = List;