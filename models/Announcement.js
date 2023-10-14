const mongoose = require('mongoose');
const { isEmail } = require('validator');

const announcementSchema = new mongoose.Schema({
  freeTime: {
    type: Date,
    required: [true, 'Please enter a free time'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please enter a quantity'],
  },
  canMove: {
    type: Boolean,
    default: false,
  },
  capsSorted: {
    type: Boolean,
    default: true,
  },
});

const Announcement = mongoose.model('user', announcementSchema);

module.exports = Announcement;