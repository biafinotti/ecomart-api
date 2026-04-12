const express = require('express');
const { registerProduct } = require('./controller');

const app = express();
app.use(express.json());

// Rota Única de Cadastro
app.post('/api/v1/products', registerProduct);

module.exports = app;

app.get('/', (req, res) => {
    res.send('🌿 API EcoMart está online e pronta para reciclar!');
});