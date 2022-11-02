const express = require('express');
const validateDescription = require('./middleware/validateDescription');
const validateName = require('./middleware/validateName');
const validatePrice = require('./middleware/validatePrice');

const app = express();

app.use(express.json());

app.post('/activities',
    validateDescription,
    validateName,
    validatePrice,
    (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

module.exports = app;