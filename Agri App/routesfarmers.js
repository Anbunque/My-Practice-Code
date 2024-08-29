const express = require('express');
const bcrypt = require('bcryptjs');
const Farmer = require('../models/Farmer');

const router = express.Router();

// Register Farmer
router.post('/register', async (req, res) => {
    const { name, email, password, location } = req.body;

    const emailExists = await Farmer.findOne({ email });
    if (emailExists) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const farmer = new Farmer({
        name,
        email,
        password: hashedPassword,
        location,
    });

    try {
        const savedFarmer = await farmer.save();
        res.send(savedFarmer);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
