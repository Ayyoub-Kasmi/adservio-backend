/** Configure Environment variables */
require('dotenv').config();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

/** Initialize Express */
const express = require('express');
const app = express();
const mongoose = require('mongoose');

/** Setup midleware */
app.use(express.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors(corsOptions));

/** Server */
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('MongoDB connection established...');
    app.listen(PORT, () => {
        console.log(`Server listening on PORT: ${PORT}`);
    });
})
    