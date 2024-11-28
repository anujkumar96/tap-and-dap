const request = require('supertest');
const app = require('./app');

describe('POST /clients', () => {
  it('should return 201 status code and success message when all fields are provided', async () => {
    const response = await request(app)
      .post('/clients')
      .send({
        clientName: 'Test Client',
        clientPOCName: 'Test POC',
        clientSalesPOCName: 'Test Sales POC',
        clientContactNumber: '1234567890',
        clientContactEmail: 'test@example.com',
        clientDescriptionText: 'Test description',
        clientCountryName: 'Test Country',
        clientCurrency: 'USD',
        clientPaymentTerm: 'Net 30'
      });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: 'Client added successfully' });
  });

  it('should return 400 status code and error message when any required field is missing', async () => {
    const response = await request(app)
      .post('/clients')
      .send({
        clientName: 'Test Client',
        clientPOCName: 'Test POC',
        clientSalesPOCName: 'Test Sales POC',
        clientContactNumber: '1234567890',
        clientContactEmail: 'test@example.com',
        clientDescriptionText: 'Test description',
        clientCountryName: 'Test Country',
        clientCurrency: 'USD'
      });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'All fields are required' });
  });
});