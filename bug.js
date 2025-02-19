const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // Example: Accessing a non-existent property
    const data = { name: 'John Doe' };
    const nonExistent = data.address.street; 
    res.send('Hello from Express!');
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));