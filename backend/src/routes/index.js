const { Router } = require('express');
const router = Router();

const User = require('../models/users');

router.get('/', (req, res) => res.send('Hello World'));

router.post('/singup', (req, res) => {
    res.send('well done');
});

module.exports = router;