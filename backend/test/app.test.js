const request = require('supertest');

// Importar a app (servidor Express)
const app = require('../app');

describe('Test API Endpoints', () => {
  it('should return message from /api/message', async () => {
    const res = await request(app).get('/api/message');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello from backend!');
  });
});