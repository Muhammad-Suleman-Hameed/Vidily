const movies = require('./routes/movies');
const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());
app.use('/movies' , movies);

app.listen(9000)
console.log('Listening at port 9000...');

