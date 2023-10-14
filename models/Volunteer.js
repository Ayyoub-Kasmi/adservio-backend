const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['individual', 'dropoff'],
        required: true
    }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
