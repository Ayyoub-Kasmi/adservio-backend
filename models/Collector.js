const mongoose = require('mongoose');
const { isEmail } = require('validator');

const collectorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter a phone number'],
    },
    points: {
        type: Number,
        default: 0,
    },
    // email: {
    //     type: String,
    //     required: [true, 'Please enter an email'],
    //     unique: true,
    //     lowercase: true,
    //     validate: [isEmail, 'Please enter a valid email']
    // },
    // password: {
    //     type: String,
    //     required: [true, 'Please enter a password'],
    //     minlength: [6, 'Minimum password length is 6 characters'],
    // }
});

const Collector = mongoose.model('user', collectorSchema);

module.exports = Collector;