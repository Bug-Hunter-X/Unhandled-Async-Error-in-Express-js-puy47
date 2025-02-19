const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const data = { name: 'John Doe' };
      // Handle the potential error
      const address = data.address || {};
      const street = address.street || 'N/A';
      res.send(`Hello from Express! Street: ${street}`);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));