
// Import necessary dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { fetchCollectionActuals, deleteCollectionActual } from '../actions/collectionActualsActions';

// Define the CollectionActualsPage component
const CollectionActualsPage = () => {
  // Access the collection actuals data from Redux store
  const collectionActuals = useSelector(state => state.collectionActuals);
  const dispatch = useDispatch();

  // Fetch collection actuals data on component mount
  React.useEffect(() => {
    dispatch(fetchCollectionActuals());
  }, [dispatch]);

  // Handle delete collection actual event
  const handleDelete = (id) => {
    dispatch(deleteCollectionActual(id));
  };

  return (
    <div>
      <h1>Collection Actuals Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {collectionActuals.map(collectionActual => (
            <tr key={collectionActual.id}>
              <td>{collectionActual.id}</td>
              <td>{collectionActual.name}</td>
              <td>{collectionActual.amount}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(collectionActual.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CollectionActualsPage;
