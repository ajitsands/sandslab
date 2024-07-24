const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api/api');
const db = require('./db'); // Ensure the db module is imported

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
