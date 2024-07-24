const express = require('express');
const router = express.Router();
const db = require('../db'); // Ensure the db module is imported

// Add User Route
router.post('/add-user', (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User added successfully');
    }
  });
});

// Update User Route with Debug Logging
router.post('/update-user', (req, res) => {
  //console.log('Request body:', req.body); // Log the request body
  const { name, email, id } = req.body;
  const query = 'UPDATE users SET name = ?, email = ? WHERE ids = ?';
  //console.log('Executing query:', query, [name, email, id]); // Log the query
  db.query(query, [name, email, id], (err, result) => {
    if (err) {
      console.error('Database error:', err); // Log the error
      res.status(500).send(err);
    } else {
      res.status(200).send('User updated successfully');
    }
  });
});

module.exports = router;
