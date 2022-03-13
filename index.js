require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { db } = require('./dbconnection');
const cors = require('cors');
const { applicationSubmitHandler, getAllApplications } = require('./application');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//db connection
db.getConnection((err) => {
    if (err) throw err;
    console.log("db connected");
});

//routes
app.post('/form-data', applicationSubmitHandler);

//applications
app.get('/applications', getAllApplications);

//Captures unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

//Server listenning 5000
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server started on port", port);
});