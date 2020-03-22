const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');

const User = require('../models/users');

router.get('/', (req, res) => res.send('Hello World'));

router.post('/singup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();
    
    const token = jwt.sign({ _id: newUser._id }, 'secretKey');
    res.status(200).json({token});
});

module.exports = router;