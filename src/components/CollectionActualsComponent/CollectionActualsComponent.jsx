
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchCollectionActuals } from '../actions/collectionActions';

const CollectionActualsComponent = () => {
  const collectionActuals = useSelector(state => state.collection.actuals);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCollectionActuals());
  }, [dispatch]);

  return (
    <div>
      <h2>Collection Actuals</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {collectionActuals.map(actual => (
            <tr key={actual.id}>
              <td>{actual.date}</td>
              <td>{actual.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CollectionActualsComponent;
