const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Create an array to store the client data
let clients = [];

// Route to handle adding a new client
app.post('/clients', (req, res) => {
  const {
    clientName,
    clientPOCName,
    clientSalesPOCName,
    clientContactNumber,
    clientContactEmail,
    clientDescriptionText,
    clientCountryName,
    clientCurrency,
    clientPaymentTerm
  } = req.body;

  // Validate the required fields
  if (!clientName || !clientPOCName || !clientSalesPOCName || !clientContactNumber || !clientContactEmail || !clientDescriptionText || !clientCountryName || !clientCurrency || !clientPaymentTerm) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a new client object
  const newClient = {
    clientName,
    clientPOCName,
    clientSalesPOCName,
    clientContactNumber,
    clientContactEmail,
    clientDescriptionText,
    clientCountryName,
    clientCurrency,
    clientPaymentTerm
  };

  // Add the new client to the array
  clients.push(newClient);

  return res.status(201).json({ message: 'Client added successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});