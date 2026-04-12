test('soma básica', () => {
  expect(1 + 2).toBe(3);
});

const request = require('supertest');
const app = require('../src/app');

describe('Cadastro de Produtos EcoMart', () => {
    
    it('Deve cadastrar um produto válido', async () => {
        const res = await request(app)
            .post('/api/v1/products')
            .send({
                name: "Suco de Uva Vidro",
                barcode: "1234567890123",
                price: 15.00,
                material: "Vidro",
                ecoPoints: 2
            });
        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe("Suco de Uva Vidro");
    });

    it('Não deve aceitar preço abaixo de 0.01', async () => {
        const res = await request(app)
            .post('/api/v1/products')
            .send({
                name: "Bala",
                barcode: "9876543210987",
                price: 0.00,
                material: "Plástico"
            });
        expect(res.statusCode).toBe(400);
    });

    it('Não deve aceitar código de barras duplicado', async () => {
        const product = {
            name: "Produto Original",
            barcode: "1111111111111",
            price: 10.00,
            material: "Papel"
        };
        await request(app).post('/api/v1/products').send(product);
        const res = await request(app).post('/api/v1/products').send(product);
        
        expect(res.statusCode).toBe(409);
    });
});