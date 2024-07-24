import React, { useState } from 'react';
import axios from 'axios';

const UpdateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setIds] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/update-user', {
        id,
        name,
        email,
      });
      alert(response.data);
    } catch (error) {
      console.error('There was an error Updating the user!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setIds(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {/* <button type="submit">Add User</button> */}
      <button type="submit">Update User</button>
    </form>
  );
};

export default UpdateUser;
