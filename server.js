const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/signupDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a User schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String, // Note: In a real application, passwords should be hashed
    contactNumber: String,
    address: String,
    city: String,
    state: String,
    zipcode: String
});

// Create a User model
const User = mongoose.model('User', userSchema);

// API endpoint to handle sign up
app.post('/api/signup', (req, res) => {
    const userData = req.body;

    const newUser = new User(userData);

    newUser.save((err) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Failed to sign up user.' });
        } else {
            res.status(201).json({ success: true, message: 'User signed up successfully.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
