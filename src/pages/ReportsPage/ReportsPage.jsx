import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { fetchReports } from '../actions/reportsActions';

const ReportsPage = () => {
  const reports = useSelector(state => state.reports);
  const dispatch = useDispatch();

  const handleGenerateReports = () => {
    dispatch(fetchReports());
  };

  return (
    <div>
      <h1>Reports Page</h1>
      <Button onClick={handleGenerateReports}>Generate Reports</Button>
      <Table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Allocation</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td>{report.resource}</td>
              <td>{report.allocation}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReportsPage;
