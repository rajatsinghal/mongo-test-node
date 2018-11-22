const mongoose = require('mongoose');

const event_log_schema = new mongoose.Schema({
    'user_id': { type: Number, required: true },
    'event_type': { type: String, required: true },
    'app_version': Number,
    'app_platform': String,
}, { timestamps: { createdAt: 'created_at', updatedAt: false } }
);

const EventLog = mongoose.model('EventLog', event_log_schema);
module.exports = { event_log_schema, EventLog };