const request = require('supertest');
const app = require('./app');

describe('Employee API', () => {
  let employees = [];

  beforeEach(() => {
    employees = [];
  });

  describe('POST /employees', () => {
    it('should add a new employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000
      };

      const response = await request(app)
        .post('/employees')
        .send(employee);

      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe('Employee added successfully');
      expect(employees.length).toBe(1);
      expect(employees[0]).toMatchObject(employee);
    });

    it('should return an error if required fields are missing', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100
      };

      const response = await request(app)
        .post('/employees')
        .send(employee);

      expect(response.statusCode).toBe(400);
      expect(response.body.error).toBe('Missing required fields');
      expect(employees.length).toBe(0);
    });
  });

  describe('PUT /employees/:id', () => {
    it('should update an existing employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000
      };

      employees.push(employee);

      const updatedEmployee = {
        name: 'John Doe',
        designation: 'Senior Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 6000
      };

      const response = await request(app)
        .put(`/employees/${employees[0].id}`)
        .send(updatedEmployee);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Employee updated successfully');
      expect(employees[0]).toMatchObject(updatedEmployee);
    });

    it('should return an error if employee is not found', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000
      };

      const response = await request(app)
        .put('/employees/123')
        .send(employee);

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Employee not found');
    });
  });

  describe('PUT /employees/:id/lwd', () => {
    it('should mark LWD for an employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000
      };

      employees.push(employee);

      const response = await request(app)
        .put(`/employees/${employees[0].id}/lwd`);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('LWD marked successfully');
      expect(employees[0].lwd).toBe(true);
      expect(employees[0].cost).toBe(0);
    });

    it('should return an error if employee is not found', async () => {
      const response = await request(app)
        .put('/employees/123/lwd');

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Employee not found');
    });
  });

  describe('POST /employees/:id/notes', () => {
    it('should add a note to an employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000,
        notes: []
      };

      employees.push(employee);

      const note = 'This is a note';

      const response = await request(app)
        .post(`/employees/${employees[0].id}/notes`)
        .send({ note });

      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe('Note added successfully');
      expect(employees[0].notes.length).toBe(1);
      expect(employees[0].notes[0]).toBe(note);
    });

    it('should return an error if employee is not found', async () => {
      const note = 'This is a note';

      const response = await request(app)
        .post('/employees/123/notes')
        .send({ note });

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Employee not found');
    });
  });

  describe('GET /employees/:id/notes', () => {
    it('should return the notes of an employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000,
        notes: ['Note 1', 'Note 2']
      };

      employees.push(employee);

      const response = await request(app)
        .get(`/employees/${employees[0].id}/notes`);

      expect(response.statusCode).toBe(200);
      expect(response.body.notes).toEqual(employee.notes);
    });

    it('should return an error if employee is not found', async () => {
      const response = await request(app)
        .get('/employees/123/notes');

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Employee not found');
    });
  });

  describe('POST /employees/:id/notes/additional', () => {
    it('should add an additional note to an employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000,
        notes: []
      };

      employees.push(employee);

      const note = 'This is an additional note';

      const response = await request(app)
        .post(`/employees/${employees[0].id}/notes/additional`)
        .send({ note });

      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe('Additional note added successfully');
      expect(employees[0].notes.length).toBe(1);
      expect(employees[0].notes[0]).toBe(note);
    });

    it('should return an error if employee is not found', async () => {
      const note = 'This is an additional note';

      const response = await request(app)
        .post('/employees/123/notes/additional')
        .send({ note });

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Employee not found');
    });
  });

  describe('GET /employees/:id/notes/additional', () => {
    it('should return the additional notes of an employee', async () => {
      const employee = {
        name: 'John Doe',
        designation: 'Software Engineer',
        supervisor: 'Jane Smith',
        bu: 'IT',
        project: 'Project A',
        allocation: 100,
        cost: 5000,
        notes: ['Note 1', 'Note 2']
      };

      employees.push(employee);

      const response = await request(app)
        .get(`/employees/${employees[0].id}/notes/additional`);

      expect(response.statusCode).toBe(200);
      expect(response.body.additionalNotes).toEqual(employee.notes);
    });

    it('should return an error if employee is not found', async () => {
      const response = await request(app)
        .get('/employees/123/notes/additional');

      expect(response.statusCode).toBe(404);
      expect(response.body.error).toBe('Employee not found');
    });
  });
});