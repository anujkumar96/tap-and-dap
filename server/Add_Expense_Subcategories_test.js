const request = require('supertest');
const app = require('./app');

describe('Expense Subcategories API', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('GET /expenseSubcategories', () => {
    it('should return all expense subcategories', async () => {
      const response = await request(app).get('/expenseSubcategories');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expenseSubcategories);
    });
  });

  describe('POST /expenseSubcategories', () => {
    it('should add a new expense subcategory', async () => {
      const newSubcategory = {
        name: 'Subcategory 4',
        category: 'Category 1',
        description: 'Description 4'
      };

      const response = await request(app)
        .post('/expenseSubcategories')
        .send(newSubcategory);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newSubcategory.name);
      expect(response.body.category).toBe(newSubcategory.category);
      expect(response.body.description).toBe(newSubcategory.description);
      expect(response.body.isActive).toBe(true);
    });

    it('should return an error if expense category does not exist', async () => {
      const newSubcategory = {
        name: 'Subcategory 5',
        category: 'Category 3',
        description: 'Description 5'
      };

      const response = await request(app)
        .post('/expenseSubcategories')
        .send(newSubcategory);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Expense Category does not exist' });
    });
  });

  describe('PUT /expenseSubcategories/:id', () => {
    it('should edit an existing expense subcategory', async () => {
      const subcategoryToUpdate = expenseSubcategories[0];
      const updatedSubcategory = {
        name: 'Updated Subcategory 1',
        category: 'Updated Category 1',
        description: 'Updated Description 1'
      };

      const response = await request(app)
        .put(`/expenseSubcategories/${subcategoryToUpdate.id}`)
        .send(updatedSubcategory);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(updatedSubcategory.name);
      expect(response.body.category).toBe(updatedSubcategory.category);
      expect(response.body.description).toBe(updatedSubcategory.description);
    });

    it('should return an error if expense subcategory does not exist', async () => {
      const updatedSubcategory = {
        name: 'Updated Subcategory 5',
        category: 'Updated Category 5',
        description: 'Updated Description 5'
      };

      const response = await request(app)
        .put('/expenseSubcategories/nonexistentId')
        .send(updatedSubcategory);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Expense Subcategory not found' });
    });

    it('should return an error if expense category does not exist', async () => {
      const subcategoryToUpdate = expenseSubcategories[0];
      const updatedSubcategory = {
        name: 'Updated Subcategory 1',
        category: 'Updated Category 3',
        description: 'Updated Description 1'
      };

      const response = await request(app)
        .put(`/expenseSubcategories/${subcategoryToUpdate.id}`)
        .send(updatedSubcategory);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Expense Category does not exist' });
    });
  });

  describe('PATCH /expenseSubcategories/:id', () => {
    it('should activate/deactivate an existing expense subcategory', async () => {
      const subcategoryToActivate = expenseSubcategories[2];
      const isActive = !subcategoryToActivate.isActive;

      const response = await request(app)
        .patch(`/expenseSubcategories/${subcategoryToActivate.id}`)
        .send({ isActive });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.isActive).toBe(isActive);
    });

    it('should return an error if expense subcategory does not exist', async () => {
      const isActive = true;

      const response = await request(app)
        .patch('/expenseSubcategories/nonexistentId')
        .send({ isActive });

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Expense Subcategory not found' });
    });
  });

  describe('PATCH /expenseSubcategories/reactivate/:id', () => {
    it('should reactivate an existing expense subcategory', async () => {
      const subcategoryToReactivate = expenseSubcategories[2];

      const response = await request(app)
        .patch(`/expenseSubcategories/reactivate/${subcategoryToReactivate.id}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body.isActive).toBe(true);
    });

    it('should return an error if expense subcategory does not exist', async () => {
      const response = await request(app)
        .patch('/expenseSubcategories/reactivate/nonexistentId');

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ error: 'Expense Subcategory not found' });
    });
  });
});