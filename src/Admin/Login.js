import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import './login.css'; // Ensure this import is present

const LoginPage = ({ onChildData }) => {
 const [loggedin,setLoggedin]=useState(false)
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    // Fetch credentials from API when component mounts
    const fetchCredentials = async () => {
      try {
        const response = await axios.get('https://affiliate-s3eu.onrender.com/login'); // Replace with your API endpoint
        setCredentials(response.data);
      } catch (error) {
        console.error('Error fetching credentials:', error);
      }
    };

    fetchCredentials();
   
  }, [loggedin,credentials]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const user = credentials.find(
      (cred) => cred.username === username && cred.password === password
    );

    if (user) {
      // Handle successful login
      alert('Login successful!');
      setLoggedin(true)
      navigate('/admin');
      onChildData(true)
      // You might want to redirect the user or store the token
    } else {
      // Handle login failure
      setError('Invalid username or password');
      
    }
  };

  return (
    <div className="login-container mt-1">
      <h3>Admin</h3>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button className='log-btn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
