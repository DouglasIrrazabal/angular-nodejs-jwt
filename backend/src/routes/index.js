const { Router } = require('express');
const router = Router();

const User = require('../models/users');

router.get('/', (req, res) => res.send('Hello World'));

router.post('/singup', (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    console.log(newUser);
    res.send('well done');
});

module.exports = router;