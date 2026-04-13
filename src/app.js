const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { registerProduct } = require('./controller');

const app = express();
app.use(express.json());

// 1. Objeto Swagger (Pode deixar simplificado agora para testar)
const swaggerDocument = {
  openapi: "3.0.0",
  info: { title: "EcoMart API", version: "1.0.0" },
  paths: {
    "/api/v1/products": {
      post: {
        summary: "Cadastra produto",
        responses: { 201: { description: "OK" } }
      }
    }
  }
};

// 2. Rota de Boas-vindas (A que funcionou!)
app.get('/', (req, res) => {
    res.send('♻️ API EcoMart está online e pronta para reciclar!');
});

// 3. Rota do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 4. Rota de Cadastro
app.post('/api/v1/products', registerProduct);

// 5. O ÚNICO Export no fim do arquivo
module.exports = app;