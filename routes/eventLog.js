const express = require('express');
const { query } = require('express-validator/check');
const { validationResult } = require('express-validator/check');

const { EventLog } = require('../models/EventLog');

const router = express.Router();

router.get('/', [
    query('EventLog').exists()
], (req, res) => { //Should be post, but for easy load testing changed to get
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array({ onlyFirstError: true }) });
    }

    const event_log = new EventLog(req.query.EventLog);
    event_log.save();
    res.send({"status": "SUCCESS", 'id': event_log._id})
})

module.exports = router;