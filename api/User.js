const express = require('express');
const router = express.Router();

const User = require('../models/User');

//sign up route
router.post('/signup', (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if (name == "" || email == "" || password == "" || dateOfBirth == "") {
        res.json({
            status: "FAILED",
            message: "Empty Input Fields!"
        });
    } else if (!/^[a-zA-Z]*$/test(name)) {
        res.json({
            status: "FAILED",
            message: "Invalid Name Entered!"
        })
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "Invalid Email Entered!"
        })    
    } else if (!new Date(dateOfBirth).getTime()) {
        res.json({
            status: "FAILED",
            message: "Invalid Date of Birth Entered!"
        })
    } else if (password.length < 8) {
        res.json({
            status: "FAILED",
            message: "Password is too Short!"
        })
    } else if {

    }
})

//sign in route
router.post('/signin', (req, res) => {
    
})

module.exports = router;