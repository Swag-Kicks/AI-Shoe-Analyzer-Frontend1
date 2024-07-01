import React, { useState } from 'react';
import './Login.css'; // Import your custom CSS file for styling
import './style.css'

const AddEmployee = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to submit the form data
    console.log('Form submitted with username:', username, 'password:', password, 'role:', role);
    // Reset form fields
    setUsername('');
    setPassword('');
    setRole('');
  };

  return (
    <div className="card ml-200 col-8 " style={{alignContent:"center"}}> {/* Apply login-container class */}
      <h2 className="login-title">Add Employee</h2> {/* Apply login-title class */}
      <form onSubmit={handleSubmit}>
        <div className="input-group"> {/* Apply input-group class */}
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
            className="login-input" 
          />
        </div>
        <div className="input-group"> 
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="login-input" 
          />
        </div>
        <div className="input-group"> 
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={handleRoleChange}
            required
            className="login-input" 
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <button type="submit" className="login-btn"> 
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
