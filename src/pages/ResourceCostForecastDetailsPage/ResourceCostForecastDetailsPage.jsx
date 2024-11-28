
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Table } from 'react-bootstrap';

const ResourceCostForecastDetailsPage = () => {
  const resourceCosts = useSelector(state => state.resourceCosts);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Resource Cost Forecast Details</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered>
            <thead>
              <tr>
                <th>Resource</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {resourceCosts.map((resourceCost, index) => (
                <tr key={index}>
                  <td>{resourceCost.resource}</td>
                  <td>{resourceCost.cost}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ResourceCostForecastDetailsPage;
