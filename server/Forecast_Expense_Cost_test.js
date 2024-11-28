const request = require('supertest');
const app = require('./app');

describe('GET /forecast/:category/:subcategory', () => {
  it('should return forecast expense cost for a specific category and subcategory', async () => {
    const response = await request(app)
      .get('/forecast/category1/subcategory1');
      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('forecastExpenseCost');
  });
});

describe('PUT /forecast/:category/:subcategory', () => {
  it('should update forecast expense cost for a specific category and subcategory', async () => {
    const response = await request(app)
      .put('/forecast/category1/subcategory1')
      .send({ forecastExpenseCost: 100 });
      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Forecast expense cost updated successfully');
  });
});

describe('GET /forecast/rollup/:level', () => {
  it('should return rolled up expense forecast at a specific level', async () => {
    const response = await request(app)
      .get('/forecast/rollup/project');
      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('rolledUpExpenseForecast');
  });
});