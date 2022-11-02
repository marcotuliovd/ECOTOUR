const express = require('express');
const validateCreatedAt = require('./middleware/validateCreatedAt');
const validateDescription = require('./middleware/validateDescription');
const validateDifficulty = require('./middleware/validateDifficulty');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');
const validateRating = require('./middleware/validateRating');

const app = express();

app.use(express.json());

app.post('/activities',
    validateDifficulty,
    validateRating,
    validateCreatedAt,
    validateDescription,
    validateName,
    validatePrice,
    (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;