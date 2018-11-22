const express = require('express');
const router = express.Router();

router.use(express.json());

router.use('/api/eventLog', require('./eventLog'));

router.get('/', (req, res) => res.send("Welcome to mongo test!!"));

module.exports = router;