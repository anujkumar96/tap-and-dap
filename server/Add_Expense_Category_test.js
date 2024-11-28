const request = require('supertest');
const app = require('./app');

describe('Expense Category API', () => {
  describe('POST /expense-categories', () => {
    it('should create a new expense category', async () => {
      const response = await request(app)
        .post('/expense-categories')
        .send({
          category: 'Food',
          description: 'Expenses related to food',
        });

      expect(response.statusCode).toBe(200);
      expect(response.body.category).toBe('Food');
      expect(response.body.description).toBe('Expenses related to food');
      expect(response.body.active).toBe(true);
    });

    it('should return 500 if there is an error', async () => {
      const response = await request(app)
        .post('/expense-categories')
        .send({
          category: 'Food',
          description: 'Expenses related to food',
        });

      expect(response.statusCode).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('PUT /expense-categories/:id', () => {
    it('should update an expense category', async () => {
      const response = await request(app)
        .put('/expense-categories/1')
        .send({
          category: 'Travel',
          description: 'Expenses related to travel',
        });

      expect(response.statusCode).toBe(200);
      expect(response.body.category).toBe('Travel');
      expect(response.body.description).toBe('Expenses related to travel');
    });

    it('should return 500 if there is an error', async () => {
      const response = await request(app)
        .put('/expense-categories/1')
        .send({
          category: 'Travel',
          description: 'Expenses related to travel',
        });

      expect(response.statusCode).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('PATCH /expense-categories/:id', () => {
    it('should activate/deactivate an expense category', async () => {
      const response = await request(app)
        .patch('/expense-categories/1')
        .send({
          active: false,
        });

      expect(response.statusCode).toBe(200);
      expect(response.body.active).toBe(false);
    });

    it('should return 500 if there is an error', async () => {
      const response = await request(app)
        .patch('/expense-categories/1')
        .send({
          active: false,
        });

      expect(response.statusCode).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });

  describe('PATCH /expense-categories/reactivate/:id', () => {
    it('should reactivate an expense category', async () => {
      const response = await request(app)
        .patch('/expense-categories/reactivate/1');

      expect(response.statusCode).toBe(200);
      expect(response.body.active).toBe(true);
    });

    it('should return 500 if there is an error', async () => {
      const response = await request(app)
        .patch('/expense-categories/reactivate/1');

      expect(response.statusCode).toBe(500);
      expect(response.body.error).toBeDefined();
    });
  });
});