const request = require('supertest');
const app = require('./app');

describe('GET /forecast/resource-cost', () => {
  it('should return the forecasted cost for a selected Client/Project combination', async () => {
    const response = await request(app)
      .get('/forecast/resource-cost')
      .query({ client: 'Client 1', project: 'Project 1' });

    expect(response.status).toBe(200);
    expect(response.body.forecastedCost).toBeDefined();
    expect(typeof response.body.forecastedCost).toBe('number');
  });

  it('should return an error if client or project is not provided', async () => {
    const response = await request(app)
      .get('/forecast/resource-cost');

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Client and project are required');
  });
});

describe('getForecastedCost', () => {
  it('should return the forecasted cost for a selected Client/Project combination', () => {
    const client = 'Client 1';
    const project = 'Project 1';

    const forecastedCost = app.getForecastedCost(client, project);

    expect(forecastedCost).toBeDefined();
    expect(typeof forecastedCost).toBe('number');
  });
});

describe('calculateForecastedCost', () => {
  it('should return the forecasted cost based on the resource allocation in the system', () => {
    const client = 'Client 1';
    const project = 'Project 1';

    const forecastedCost = app.calculateForecastedCost(client, project);

    expect(forecastedCost).toBeDefined();
    expect(typeof forecastedCost).toBe('number');
  });
});

describe('getAllocatedResources', () => {
  it('should return the allocated resources for a selected Client/Project combination', () => {
    const client = 'Client 1';
    const project = 'Project 1';

    const allocatedResources = app.getAllocatedResources(client, project);

    expect(allocatedResources).toBeDefined();
    expect(Array.isArray(allocatedResources)).toBe(true);
  });
});