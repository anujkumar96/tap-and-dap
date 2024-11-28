const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
  // Test for adding a project
  describe('POST /projects', () => {
    it('should add a project and return success response', async () => {
      const project = { name: 'Test Project' };
      const res = await request(app)
        .post('/projects')
        .send(project);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Project added successfully');
    });
  });

  // Test for editing a project
  describe('PUT /projects/:projectId', () => {
    it('should edit a project and return success response', async () => {
      const projectId = '123';
      const updatedProject = { name: 'Updated Project' };
      const res = await request(app)
        .put(`/projects/${projectId}`)
        .send(updatedProject);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Project updated successfully');
    });
  });

  // Test for adding a revenue forecast
  describe('POST /projects/:projectId/revenue-forecast', () => {
    it('should add a revenue forecast and return success response', async () => {
      const projectId = '123';
      const forecast = { amount: 1000 };
      const res = await request(app)
        .post(`/projects/${projectId}/revenue-forecast`)
        .send(forecast);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Revenue forecast added successfully');
    });
  });

  // Test for editing a revenue forecast
  describe('PUT /projects/:projectId/revenue-forecast/:forecastId', () => {
    it('should edit a revenue forecast and return success response', async () => {
      const projectId = '123';
      const forecastId = '456';
      const updatedForecast = { amount: 2000 };
      const res = await request(app)
        .put(`/projects/${projectId}/revenue-forecast/${forecastId}`)
        .send(updatedForecast);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Revenue forecast updated successfully');
    });
  });

  // Test for adding a collection forecast
  describe('POST /projects/:projectId/collection-forecast', () => {
    it('should add a collection forecast and return success response', async () => {
      const projectId = '123';
      const forecast = { amount: 500 };
      const res = await request(app)
        .post(`/projects/${projectId}/collection-forecast`)
        .send(forecast);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Collection forecast added successfully');
    });
  });

  // Test for editing a collection forecast
  describe('PUT /projects/:projectId/collection-forecast/:forecastId', () => {
    it('should edit a collection forecast and return success response', async () => {
      const projectId = '123';
      const forecastId = '789';
      const updatedForecast = { amount: 1000 };
      const res = await request(app)
        .put(`/projects/${projectId}/collection-forecast/${forecastId}`)
        .send(updatedForecast);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Collection forecast updated successfully');
    });
  });

  // Test for adding revenue actuals
  describe('POST /projects/:projectId/revenue-actuals', () => {
    it('should add revenue actuals and return success response', async () => {
      const projectId = '123';
      const actuals = { amount: 1500 };
      const res = await request(app)
        .post(`/projects/${projectId}/revenue-actuals`)
        .send(actuals);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Revenue actuals added successfully');
    });
  });

  // Test for editing revenue actuals
  describe('PUT /projects/:projectId/revenue-actuals/:actualsId', () => {
    it('should edit revenue actuals and return success response', async () => {
      const projectId = '123';
      const actualsId = '987';
      const updatedActuals = { amount: 2000 };
      const res = await request(app)
        .put(`/projects/${projectId}/revenue-actuals/${actualsId}`)
        .send(updatedActuals);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Revenue actuals updated successfully');
    });
  });

  // Test for adding collection actuals
  describe('POST /projects/:projectId/collection-actuals', () => {
    it('should add collection actuals and return success response', async () => {
      const projectId = '123';
      const actuals = { amount: 800 };
      const res = await request(app)
        .post(`/projects/${projectId}/collection-actuals`)
        .send(actuals);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Collection actuals added successfully');
    });
  });

  // Test for editing collection actuals
  describe('PUT /projects/:projectId/collection-actuals/:actualsId', () => {
    it('should edit collection actuals and return success response', async () => {
      const projectId = '123';
      const actualsId = '654';
      const updatedActuals = { amount: 1000 };
      const res = await request(app)
        .put(`/projects/${projectId}/collection-actuals/${actualsId}`)
        .send(updatedActuals);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Collection actuals updated successfully');
    });
  });

  // Test for adding notes
  describe('POST /projects/:projectId/notes', () => {
    it('should add notes and return success response', async () => {
      const projectId = '123';
      const notes = { content: 'Test note' };
      const res = await request(app)
        .post(`/projects/${projectId}/notes`)
        .send(notes);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Notes added successfully');
    });
  });

  // Test for editing notes
  describe('PUT /projects/:projectId/notes/:noteId', () => {
    it('should edit notes and return success response', async () => {
      const projectId = '123';
      const noteId = '321';
      const updatedNotes = { content: 'Updated note' };
      const res = await request(app)
        .put(`/projects/${projectId}/notes/${noteId}`)
        .send(updatedNotes);
      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('Notes updated successfully');
    });
  });
});