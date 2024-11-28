const request = require('supertest');
const app = require('./app');

describe('POST /allocate', () => {
  it('should add an allocation successfully', async () => {
    const allocation = {
      project: 'Project A',
      employee: 'John Doe',
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      role: 'Developer',
      allocationPercentage: 50
    };

    const response = await request(app)
      .post('/allocate')
      .send(allocation);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Allocation added successfully');
  });
});

describe('PUT /allocate/:allocationId', () => {
  it('should update an allocation successfully', async () => {
    const allocationId = '1';
    const updatedAllocation = {
      project: 'Project B',
      employee: 'Jane Smith',
      startDate: '2022-02-01',
      endDate: '2022-12-31',
      role: 'Tester',
      allocationPercentage: 75
    };

    const response = await request(app)
      .put(`/allocate/${allocationId}`)
      .send(updatedAllocation);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Allocation updated successfully');
  });

  it('should return 404 if allocation is not found', async () => {
    const allocationId = '999';
    const updatedAllocation = {
      project: 'Project B',
      employee: 'Jane Smith',
      startDate: '2022-02-01',
      endDate: '2022-12-31',
      role: 'Tester',
      allocationPercentage: 75
    };

    const response = await request(app)
      .put(`/allocate/${allocationId}`)
      .send(updatedAllocation);

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Allocation not found');
  });
});

Note: In the above code, `app` refers to the instance of the Express application created in the Node API file. Make sure to export the `app` object from the API file and import it in the unit test file.