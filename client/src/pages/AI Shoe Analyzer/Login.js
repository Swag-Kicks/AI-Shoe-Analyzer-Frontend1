import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css'; // Import your custom CSS file for styling
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({ email: '', password: '', username: '' });
  const [role, setRole] = useState('Owner'); // Default role is 'Owner'

  const { email, password, username } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onRoleChange = (e) => {
    setRole(e.target.value);
    setInputs({ email: '', password: '', username: '' }); // Reset inputs when role changes
  };

  const onSubmit = async (e) => {
    e.preventDefault();  
    try {
      const body = role === 'Owner' ? { email, password } : { username, password };
      const endpoint = role === 'Owner' ? 'auth/login' : 'auth/login-uploader-evaluator';
      const response = await fetch(`/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error('Login Failed. Please try again.');
      }
      const parse = await response.json();
      if (parse.token) {
        localStorage.setItem('token', parse.token);
        setAuth(true);
        toast.done('Successfully Logged In');
        Navigate("/CompanyDashboard");
      } else {
        setAuth(false);
        toast.error(parse.message);
      }
    } catch (error) {
      console.error(error.message);
      toast.error('Internal Server Issue.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Hello,<br /> <strong>Welcome!</strong></h2>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="role">Login as:</label>
          <select id="role" name="role" value={role} onChange={onRoleChange} className="login-input">
            <option value="Owner">As an Owner</option>
            <option value="Uploader">As an Uploader</option>
            <option value="Evaluator">As an Evaluator</option>
          </select>
        </div>
        {role === 'Owner' && (
          <Fragment>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
                className="login-input"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                className="login-input"
                required
              />
            </div>
          </Fragment>
        )}
        {(role === 'Uploader' || role === 'Evaluator') && (
          <Fragment>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={onChange}
                className="login-input"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChange}
                className="login-input"
                required
              />
            </div>
          </Fragment>
        )}
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
      <p className="login-register-link">
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  );
};

export default Login;
