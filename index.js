const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 6363;

mongoose.connect('mongodb://localhost:27017/logs', { useNewUrlParser: true })
    .then(() => console.log('Connected to DB'))

app.use(require('./routes'));

app.listen(port, () => { console.log(`Listening on port ${port}..`); })